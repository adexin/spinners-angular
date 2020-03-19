import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerDottedComponent } from './spinner-dotted.component';

describe('SpinnerDottedComponent', () => {
  const color = 'red';
  let component: SpinnerDottedComponent;
  let fixture: ComponentFixture<SpinnerDottedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerDottedComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDottedComponent);
    component = fixture.componentInstance;
    component.color = '#fff';
    component.size = 100;
    component.speed = 10;
    component.thickness = 50;
    fixture.detectChanges();
  });

  it('renders null if disabled', () => {
    component.enabled = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('circle')).toBeNull();
  });

  it('renders still if specified', () => {
    component.still = true;
    fixture.detectChanges();

    const circles = fixture.nativeElement.querySelectorAll('circle');
    const last = circles.length - 1;

    expect(circles[1].style.animation).toBeFalsy();
    expect(circles[last].style.animation).toBeFalsy();
    expect(circles[last].style.display).toBe('none');
  });

  it('passes props to styles', () => {
    component.size = '20%';
    component.thickness = 40;
    component.speed = 50;
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    const circles = fixture.nativeElement.querySelectorAll('circle');
    const last = circles.length - 1;
    const animationDuration = 200 / 50;

    expect(svg.style.width).toBe('20%');
    expect(circles[0].getAttribute('r')).toBeCloseTo(3 * (40 / 100));
    expect(circles[0].style.animation.includes(animationDuration)).toBeTruthy();
    expect(circles[last].getAttribute('r')).toBeCloseTo(6 * (40 / 100));
    expect(circles[last].style.animation.includes(animationDuration)).toBeTruthy();
  });

  it('overriding svg styles', () => {
    component.color = 'green';
    component.style = { color: '#fff' };
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg.style.color).toBe('rgb(255, 255, 255)');
  });
});

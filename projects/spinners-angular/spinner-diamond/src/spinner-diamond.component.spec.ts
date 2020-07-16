import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerDiamondComponent } from './spinner-diamond.component';

describe('SpinnerDiamondComponent', () => {
  const color = 'red';
  let component: SpinnerDiamondComponent;
  let fixture: ComponentFixture<SpinnerDiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerDiamondComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDiamondComponent);
    component = fixture.componentInstance;
    component.color = '#fff';
    component.size = 100;
    component.speed = 10;
    component.thickness = 50;
    component.secondaryColor = '#000';
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

    const group = fixture.nativeElement.querySelector('g');

    expect(group.style.animation).toBe('0s ease 0s 1 normal none running none');
  });

  it('passes props to styles', () => {
    component.size = '20%';
    component.thickness = 40;
    component.speed = 50;
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    const circles = fixture.nativeElement.querySelectorAll('circle');
    const last = circles.length - 1;
    const group = fixture.nativeElement.querySelector('g');

    expect(svg.style.width).toBe('20%');
    expect(circles[0].getAttribute('fill')).toBe('#000');
    expect(circles[0].getAttribute('r')).toBeCloseTo(2.5 * (40 / 100));
    expect(circles[last].getAttribute('r')).toBeCloseTo(3.5 * (40 / 100));
    expect(group.style.animation.includes(140 / 50)).toBeTruthy();
  });

  it('overriding svg styles', () => {
    component.color = 'green';
    component.styles = { color: '#fff' };
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg.style.color).toBe('rgb(255, 255, 255)');
  });
});

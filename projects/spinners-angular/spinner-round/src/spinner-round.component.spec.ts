import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerRoundComponent } from './spinner-round.component';

describe('SpinnerRoundComponent', () => {
  const color = 'red';
  let component: SpinnerRoundComponent;
  let fixture: ComponentFixture<SpinnerRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerRoundComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerRoundComponent);
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

    const circle = fixture.nativeElement.querySelector('circle');

    expect(circle.style.animation).toBe('0s ease 0s 1 normal none running none');
  });

  it('passes props to styles', () => {
    component.size = '20%';
    component.thickness = 40;
    component.speed = 50;
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    const circle = fixture.nativeElement.querySelector('circle');

    expect(svg.style.width).toBe('20%');
    expect(circle.getAttribute('stroke-width')).toBeCloseTo(3 * (40 / 100));
    expect(circle.style.animation.includes(140 / 50)).toBeTruthy();
  });

  it('overriding svg styles', () => {
    component.color = 'green';
    component.styles = { color: '#fff' };
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg.style.color).toBe('rgb(255, 255, 255)');
  });
});

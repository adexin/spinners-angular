import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerInfinityComponent } from './spinner-infinity.component';

describe('SpinnerInfinityComponent', () => {
    const color = 'red';
    let component: SpinnerInfinityComponent;
    let fixture: ComponentFixture<SpinnerInfinityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpinnerInfinityComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerInfinityComponent);
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

        const uses = fixture.nativeElement.querySelectorAll('use');

        expect(uses[1].style.animation).toBeFalsy();
    });

    it('passes props to styles', () => {
        component.size = '20%';
        component.thickness = 40;
        component.speed = 50;
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');
        const uses = fixture.nativeElement.querySelectorAll('use');
        const strokeWidth = 7 * (40 / 100);

        expect(svg.style.width).toBe('20%');

        expect(uses[0].getAttribute('stroke-width')).toBeCloseTo(strokeWidth);
        expect(uses[0].getAttribute('stroke')).toBe('#000');
        expect(uses[1].getAttribute('stroke-width')).toBeCloseTo(strokeWidth);
        expect(uses[1].style.animation.includes(140 / 50)).toBeTruthy();
    });

    it('overriding svg styles', () => {
        component.color = 'green';
        component.styles = { color: '#fff' };
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');

        expect(svg.style.color).toBe('rgb(255, 255, 255)');
    });
});

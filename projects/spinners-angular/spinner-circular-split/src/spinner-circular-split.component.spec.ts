import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerCircularSplitComponent } from './spinner-circular-split.component';

describe('SpinnerCircularSplitComponent', () => {
    const color = 'red';
    let component: SpinnerCircularSplitComponent;
    let fixture: ComponentFixture<SpinnerCircularSplitComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpinnerCircularSplitComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerCircularSplitComponent);
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

        const circles = fixture.nativeElement.querySelectorAll('circle');

        expect(circles[1].style.animation).toBeFalsy();
    });

    it('passes props to styles', () => {
        component.size = '20%';
        component.thickness = 40;
        component.speed = 50;
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');
        const circles = fixture.nativeElement.querySelectorAll('circle');

        expect(svg.style.width).toBe('20%');
        expect(circles[0].getAttribute('stroke')).toBe('#000');
        expect(circles[0].getAttribute('stroke-width')).toBeCloseTo(4 * (40 / 100));
        expect(circles[1].style.animation.includes(140 / 50)).toBeTruthy();
    });

    it('overriding svg styles', () => {
        component.color = 'green';
        component.styles = { color: '#fff' };
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');

        expect(svg.style.color).toBe('rgb(255, 255, 255)');
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerRoundOutlinedComponent } from './spinner-round-outlined.component';

describe('SpinnerRoundOutlinedComponent', () => {
    const color = 'red';
    const noAnimation = '0s ease 0s 1 normal none running none';
    const animations = [
        { r: 2 },
        {
            name: 'spinners-angular-round-outlined',
            r: 14,
        },
        {
            name: 'spinners-angular-round-outlined',
            r: 28,
        },
    ];
    let component: SpinnerRoundOutlinedComponent;
    let fixture: ComponentFixture<SpinnerRoundOutlinedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpinnerRoundOutlinedComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerRoundOutlinedComponent);
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
        component.thickness = 100;
        fixture.detectChanges();

        const circles = fixture.nativeElement.querySelectorAll('circle');

        circles.forEach((circle) => {
            expect(circle.style.animation).toBeFalsy();
        });
    });

    it('passes props to styles', () => {
        component.size = '20%';
        component.thickness = 40;
        component.speed = 50;
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');
        const circles = fixture.nativeElement.querySelectorAll('circle');

        expect(svg.style.width).toBe('20%');
        circles.forEach((circle, index) => {
            if (index) {
                expect(circle.style.animation.includes(140 / 50)).toBeTruthy();
                expect(circle.style.animation.includes(animations[index].name)).toBeTruthy();
                expect(circle.getAttribute('stroke-width')).toBeCloseTo(3 * (40 / 100));
            } else {
                expect(circle.getAttribute('stroke-width')).toBe('4');
                expect(circle.style.animation).toBeFalsy();
            }
        });
    });

    it('overriding svg styles', () => {
        component.color = 'green';
        component.styles = { color: '#fff' };
        fixture.detectChanges();

        const svg = fixture.nativeElement.querySelector('svg');

        expect(svg.style.color).toBe('rgb(255, 255, 255)');
    });
});

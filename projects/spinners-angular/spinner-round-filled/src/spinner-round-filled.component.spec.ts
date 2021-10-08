import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerRoundFilledComponent } from './spinner-round-filled.component';

describe('SpinnerRoundFilledComponent', () => {
    const color = 'red';
    const noAnimation = '0s ease 0s 1 normal none running none';
    const animations = [
        { r: 4 },
        {
            name: 'spinners-angular-round-filled-inner',
            r: 12.66,
        },
        {
            name: 'spinners-angular-round-filled-center',
            r: 20.32,
        },
        {
            name: 'spinners-angular-round-filled-outer',
            r: 27.5,
        },
    ];
    let component: SpinnerRoundFilledComponent;
    let fixture: ComponentFixture<SpinnerRoundFilledComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpinnerRoundFilledComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerRoundFilledComponent);
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

        circles.forEach((circle, index) => {
            expect(circle.style.animation).toBe(noAnimation);
            expect(circle.getAttribute('r')).toBe(animations[index].r.toString());
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
            expect(circle.style.animation.includes(animations[index].name || noAnimation)).toBeTruthy();
            if (index) {
                expect(circle.style.animation.includes(140 / 50)).toBe(true);
            }
            expect(circle.getAttribute('r')).toBeCloseTo(
                index ? animations[index].r * (40 / 100) : animations[index].r,
            );
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

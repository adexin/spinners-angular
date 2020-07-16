import { Component } from '@angular/core';
import { SpinnerComponent } from 'spinners-angular/spinners-utils';

@Component({
  selector: 'sa-spinner-dotted',
  templateUrl: './spinner-dotted.component.html',
  styleUrls: ['./spinner-dotted.component.css'],
})
export class SpinnerDottedComponent extends SpinnerComponent {
  coords = [
    { x: 22, y: -20 },
    { x: 29, y: 0 },
    { x: 22, y: 20 },
    { x: 0, y: 30 },
    { x: -23, y: 20 },
    { x: -30, y: 0 },
    { x: -23, y: -20 },
    { x: 0, y: -30 },
  ];

  get duration() {
    return 200 / this.speed;
  }

  get centerStyle() {
    return !this.still
      ? {
        animation: `spinners-angular-dotted-center ${this.duration}s ease-out infinite`,
        transformOrigin: 'center',
      }
      : { display: 'none' };
  }

  circleStyle(i) {
    return {
      transform: `translate(${this.coords[i].x}px, ${this.coords[i].y}px)`,
      ...(
        !this.still
          ? {
            animation: `spinners-angular-dotted-shrink ${this.duration}s cubic-bezier(0, 0.9, 0, 0.9) ${(this.duration / 20) * i}s infinite`
          }
          : {}
      ),
    };
  }
}

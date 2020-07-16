import { Component } from '@angular/core';
import { SpinnerComponent } from 'spinners-angular/spinners-utils';

@Component({
  selector: 'sa-spinner-round-outlined',
  templateUrl: './spinner-round-outlined.component.html',
  styleUrls: ['./spinner-round-outlined.component.css'],
})
export class SpinnerRoundOutlinedComponent extends SpinnerComponent {
  animations = [
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

  strokeWidth(index) {
    return index ? 3 * (this.thickness / 100) : 4;
  }

  circleStyle(animation) {
    return animation.name && !this.still
      ? { animation: `${animation.name} ${140 / this.speed}s ease-in-out infinite` }
      : {};
  }
}

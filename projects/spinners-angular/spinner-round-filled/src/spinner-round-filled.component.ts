import { Component } from '@angular/core';
import { SpinnerComponent } from 'spinners-angular/spinners-utils';

@Component({
    selector: 'sa-spinner-round-filled',
    templateUrl: './spinner-round-filled.component.html',
    styleUrls: ['./spinner-round-filled.component.css'],
})
export class SpinnerRoundFilledComponent extends SpinnerComponent {
  animations = [
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

  circleStyle(animation) {
      return {
          opacity: animation.name ? 0.25 : 1,
          transformOrigin: 'center',
          animation: (!animation.name || this.still)
              ? 'none'
              : `${animation.name} ${140 / this.speed}s ease-in-out infinite`,
      };
  }

  radius(animation) {
      return animation.r * (animation.name ? (this.thickness / 100) : 1);
  }
}

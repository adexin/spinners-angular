import { Component } from '@angular/core';
import { SpinnerComponent } from 'spinners-angular/spinners-utils';

@Component({
  selector: 'sa-spinner-round',
  templateUrl: './spinner-round.component.html',
  styleUrls: ['./spinner-round.component.css'],
})
export class SpinnerRoundComponent extends SpinnerComponent {
  get strokeWidth() {
    return 3 * (this.thickness / 100);
  }

  get circleStyle() {
    return {
      animation: !this.still ? `spinners-angular-round ${140 / this.speed}s ease-in-out infinite` : 'none',
      transformOrigin: 'center',
    };
  }
}

import { Component } from '@angular/core';
import { SpinnerComponentWithSecondaryColor } from 'spinners-angular/spinners-utils';

@Component({
  selector: 'sa-spinner-infinity',
  templateUrl: './spinner-infinity.component.html',
  styleUrls: ['./spinner-infinity.component.css'],
})
export class SpinnerInfinityComponent extends SpinnerComponentWithSecondaryColor {
  get strokeWidth() {
    return 7 * (this.thickness / 100);
  }

  get dashStyle() {
    return !this.still
      ? { animation: `spinners-angular-infinity ${140 / this.speed}s linear infinite` }
      : {};
  }
}

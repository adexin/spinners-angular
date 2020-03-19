import { Component } from '@angular/core';
import { SpinnerComponent } from './utils';

@Component({
  selector: 'sa-spinner-infinity',
  templateUrl: './spinner-infinity.component.html',
  styleUrls: ['./spinner-infinity.component.css'],
})
export class SpinnerInfinityComponent extends SpinnerComponent {
  get strokeWidth() {
    return 7 * (this.thickness / 100);
  }

  get dashStyle() {
    return !this.still
      ? { animation: `spinners-angular-infinity ${140 / this.speed}s linear infinite` }
      : {};
  }
}

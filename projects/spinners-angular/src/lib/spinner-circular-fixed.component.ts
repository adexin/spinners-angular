import { Component } from '@angular/core';
import { SpinnerComponent } from './utils';

@Component({
  selector: 'sa-spinner-circular-fixed',
  templateUrl: './spinner-circular-fixed.component.html',
  styleUrls: ['./spinner-circular-fixed.component.css'],
})
export class SpinnerCircularFixedComponent extends SpinnerComponent {
  get strokeWidth() {
    return 4 * (this.thickness / 100);
  }

  get dashStyle() {
    return {
      color: this.color,
      ...(
        !this.still
          ? { animation: `spinners-angular-circular-fixed ${140 / this.speed}s linear infinite` }
          : {}
      ),
    };
  }
}

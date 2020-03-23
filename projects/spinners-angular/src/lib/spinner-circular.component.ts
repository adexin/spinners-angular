import { Component } from '@angular/core';
import { SpinnerComponent } from './utils';

@Component({
  selector: 'sa-spinner-circular',
  templateUrl: './spinner-circular.component.html',
  styleUrls: ['./spinner-circular.component.css'],
})
export class SpinnerCircularComponent extends SpinnerComponent {
  get strokeWidth() {
    return 4 * (this.thickness / 100);
  }

  get dashStyle() {
    return {
      color: this.color,
      ...(
        !this.still
          ? { animation: `spinners-angular-circular ${140 / this.speed}s linear infinite` }
          : {}
      ),
    };
  }
}

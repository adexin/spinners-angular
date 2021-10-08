import { Component } from '@angular/core';
import { SpinnerComponentWithSecondaryColor } from 'spinners-angular/spinners-utils';

@Component({
    selector: 'sa-spinner-circular-split',
    templateUrl: './spinner-circular-split.component.html',
    styleUrls: ['./spinner-circular-split.component.css'],
})
export class SpinnerCircularSplitComponent extends SpinnerComponentWithSecondaryColor {
    get strokeWidth() {
        return 4 * (this.thickness / 100);
    }

    get dashStyle() {
        return {
            color: this.color,
            ...(
                !this.still
                    ? { animation: `spinners-angular-circular-split ${140 / this.speed}s linear infinite` }
                    : {}
            ),
        };
    }
}

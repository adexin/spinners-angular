import { Component } from '@angular/core';
import { SpinnerComponentWithSecondaryColor } from 'spinners-angular/spinners-utils';

@Component({
  selector: 'sa-spinner-diamond',
  templateUrl: './spinner-diamond.component.html',
  styleUrls: ['./spinner-diamond.component.css'],
})
export class SpinnerDiamondComponent extends SpinnerComponentWithSecondaryColor {
  colorCoords = [
    { x: 3, y: 48 },
    { x: 18, y: 33 },
    { x: 18, y: 48 },
    { x: 18, y: 63 },
    { x: 33, y: 48 },
  ];

  get coords() {
    return [
      ...this.colorCoords,
      { x: 33, y: 18 },
      { x: 33, y: 33 },
      { x: 33, y: 63 },
      { x: 33, y: 78 },
      { x: 49, y: 3 },
      { x: 49, y: 18 },
      { x: 49, y: 33 },
      { x: 49, y: 48 },
      { x: 49, y: 63 },
      { x: 49, y: 78 },
      { x: 49, y: 93 },
      { x: 64, y: 18 },
      { x: 64, y: 33 },
      { x: 64, y: 48 },
      { x: 64, y: 63 },
      { x: 64, y: 78 },
      { x: 79, y: 33 },
      { x: 79, y: 48 },
      { x: 79, y: 63 },
      { x: 94, y: 48 },
    ];
  }

  get groupStyle() {
    return {
      animation: !this.still ? `spinners-angular-diamond ${140 / this.speed}s steps(2, end) infinite` : 'none',
    };
  }
}

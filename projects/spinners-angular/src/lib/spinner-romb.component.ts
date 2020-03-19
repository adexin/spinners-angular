import { Component } from '@angular/core';
import { SpinnerComponent } from './utils';

@Component({
  selector: 'sa-spinner-romb',
  templateUrl: './spinner-romb.component.html',
  styleUrls: ['./spinner-romb.component.css'],
})
export class SpinnerRombComponent extends SpinnerComponent {
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

  get rombStyle() {
    return {
      animation: !this.still ? `spinners-angular-romb ${140 / this.speed}s steps(2, end) infinite` : 'none',
    };
  }
}

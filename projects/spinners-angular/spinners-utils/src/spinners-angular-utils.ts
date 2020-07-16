import { NgStyle } from '@angular/common';
import { Input } from '@angular/core';

export class SpinnerComponent {
  @Input() color = '#38ad48';
  @Input() enabled = true;
  @Input() size: number | string = 50;
  @Input() speed = 100;
  @Input() still = false;
  @Input() styles = {};
  @Input() thickness = 100;

  get svgStyle() {
    return {
      color: this.color,
      overflow: 'visible',
      width: normalizeSize(this.size),
      height: normalizeSize(this.size),
      ...(typeof this.styles === 'string' ? JSON.parse(this.styles) : this.styles),
    };
  }
}

export class SpinnerComponentWithSecondaryColor extends SpinnerComponent {
  @Input() secondaryColor = 'rgba(0,0,0,0.44)';
}

export const normalizeSize = (size: number | string) =>
  (parseFloat(size.toString()).toString() === size.toString()
    ? `${size}px`
    : size.toString());


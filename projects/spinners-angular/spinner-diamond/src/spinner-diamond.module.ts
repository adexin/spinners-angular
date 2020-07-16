import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerDiamondComponent } from './spinner-diamond.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SpinnerDiamondComponent],
  exports: [SpinnerDiamondComponent],
})
export class SpinnerDiamondModule {}

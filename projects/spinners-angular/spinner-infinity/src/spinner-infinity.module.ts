import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerInfinityComponent } from './spinner-infinity.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SpinnerInfinityComponent],
  exports: [SpinnerInfinityComponent],
})
export class SpinnerInfinityModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerRoundFilledComponent } from './spinner-round-filled.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SpinnerRoundFilledComponent],
  exports: [SpinnerRoundFilledComponent],
})
export class SpinnerRoundFilledModule {}

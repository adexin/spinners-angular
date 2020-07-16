import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerDottedComponent } from './spinner-dotted.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SpinnerDottedComponent],
  exports: [SpinnerDottedComponent],
})
export class SpinnerDottedModule {}

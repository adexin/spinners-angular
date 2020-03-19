import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerCircularComponent } from './spinner-circular.component';
import { SpinnerCircularFixedComponent } from './spinner-circular-fixed.component';
import { SpinnerCircularSplitComponent } from './spinner-circular-split.component';
import { SpinnerDottedComponent } from './spinner-dotted.component';
import { SpinnerInfinityComponent } from './spinner-infinity.component';
import { SpinnerRombComponent } from './spinner-romb.component';
import { SpinnerRoundComponent } from './spinner-round.component';
import { SpinnerRoundFilledComponent } from './spinner-round-filled.component';
import { SpinnerRoundOutlinedComponent } from './spinner-round-outlined.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    SpinnerCircularComponent,
    SpinnerCircularFixedComponent,
    SpinnerCircularSplitComponent,
    SpinnerDottedComponent,
    SpinnerInfinityComponent,
    SpinnerRombComponent,
    SpinnerRoundComponent,
    SpinnerRoundFilledComponent,
    SpinnerRoundOutlinedComponent,
  ],
  exports: [
    SpinnerCircularComponent,
    SpinnerCircularFixedComponent,
    SpinnerCircularSplitComponent,
    SpinnerDottedComponent,
    SpinnerInfinityComponent,
    SpinnerRombComponent,
    SpinnerRoundComponent,
    SpinnerRoundFilledComponent,
    SpinnerRoundOutlinedComponent,
  ],
})
export class SpinnersAngularModule { }

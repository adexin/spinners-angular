import { NgModule } from '@angular/core';

import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { SpinnerCircularFixedModule } from 'spinners-angular/spinner-circular-fixed';
import { SpinnerCircularSplitModule } from 'spinners-angular/spinner-circular-split';
import { SpinnerDottedModule } from 'spinners-angular/spinner-dotted';
import { SpinnerInfinityModule } from 'spinners-angular/spinner-infinity';
import { SpinnerDiamondModule } from 'spinners-angular/spinner-diamond';
import { SpinnerRoundModule } from 'spinners-angular/spinner-round';
import { SpinnerRoundFilledModule } from 'spinners-angular/spinner-round-filled';
import { SpinnerRoundOutlinedModule } from 'spinners-angular/spinner-round-outlined';

@NgModule({
    exports: [
        SpinnerCircularModule,
        SpinnerCircularFixedModule,
        SpinnerCircularSplitModule,
        SpinnerDottedModule,
        SpinnerInfinityModule,
        SpinnerDiamondModule,
        SpinnerRoundModule,
        SpinnerRoundFilledModule,
        SpinnerRoundOutlinedModule,
    ],
})
export class SpinnersAngularModule {}

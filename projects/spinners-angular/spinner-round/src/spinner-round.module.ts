import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerRoundComponent } from './spinner-round.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SpinnerRoundComponent],
    exports: [SpinnerRoundComponent],
})
export class SpinnerRoundModule {}

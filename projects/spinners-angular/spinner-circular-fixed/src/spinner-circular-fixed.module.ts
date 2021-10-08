import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerCircularFixedComponent } from './spinner-circular-fixed.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SpinnerCircularFixedComponent],
    exports: [SpinnerCircularFixedComponent],
})
export class SpinnerCircularFixedModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpinnerCircularComponent } from './spinner-circular.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SpinnerCircularComponent],
    exports: [SpinnerCircularComponent],
})
export class SpinnerCircularModule {}

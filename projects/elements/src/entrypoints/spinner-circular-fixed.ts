import { DoBootstrap, Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerCircularFixedComponent } from 'spinners-angular/spinner-circular-fixed';

const element = 'sa-spinner-circular-fixed';

@NgModule({
    imports: [ BrowserModule ]
})
class SpinnerCircularFixedElementModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        if (!customElements.get(element)) {
            customElements.define(
                element,
                createCustomElement(SpinnerCircularFixedComponent, { injector: this.injector })
            );
        }
    }
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(SpinnerCircularFixedElementModule)
    .catch(err => console.error(err));

import { DoBootstrap, Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerCircularComponent } from 'spinners-angular/spinner-circular';

const element = 'sa-spinner-circular';

@NgModule({
    imports: [ BrowserModule ]
})
class SpinnerCircularElementModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        if (!customElements.get(element)) {
            customElements.define(
                element,
                createCustomElement(SpinnerCircularComponent, { injector: this.injector })
            );
        }
    }
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(SpinnerCircularElementModule)
    .catch(err => console.error(err));

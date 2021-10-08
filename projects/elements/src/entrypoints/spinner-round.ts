import { DoBootstrap, Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerRoundComponent } from 'spinners-angular/spinner-round';

const element = 'sa-spinner-round';

@NgModule({
    imports: [ BrowserModule ]
})
class SpinnerRoundElementModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        if (!customElements.get(element)) {
            customElements.define(
                element,
                createCustomElement(SpinnerRoundComponent, { injector: this.injector })
            );
        }
    }
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(SpinnerRoundElementModule)
    .catch(err => console.error(err));

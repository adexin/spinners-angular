import { DoBootstrap, Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerRoundFilledComponent } from 'spinners-angular/spinner-round-filled';

const element = 'sa-spinner-round-filled';

@NgModule({
    imports: [ BrowserModule ]
})
class SpinnerRoundFilledElementModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        if (!customElements.get(element)) {
            customElements.define(
                element,
                createCustomElement(SpinnerRoundFilledComponent, { injector: this.injector })
            );
        }
    }
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(SpinnerRoundFilledElementModule)
    .catch(err => console.error(err));

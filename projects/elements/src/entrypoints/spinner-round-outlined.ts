import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerRoundOutlinedComponent } from 'spinners-angular/spinner-round-outlined';

const element = 'sa-spinner-round-outlined';

@NgModule({
  imports: [ BrowserModule ]
})
class SpinnerRoundOutlinedElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(element)) {
      customElements.define(
        element,
        createCustomElement(SpinnerRoundOutlinedComponent, { injector: this.injector })
      );
    }
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SpinnerRoundOutlinedElementModule)
  .catch(err => console.error(err));

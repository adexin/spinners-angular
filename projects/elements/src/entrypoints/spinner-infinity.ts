import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerInfinityComponent } from 'spinners-angular/spinner-infinity';

const element = 'sa-spinner-infinity';

@NgModule({
  imports: [ BrowserModule ]
})
class SpinnerInfinityElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(element)) {
      customElements.define(
        element,
        createCustomElement(SpinnerInfinityComponent, { injector: this.injector })
      );
    }
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SpinnerInfinityElementModule)
  .catch(err => console.error(err));

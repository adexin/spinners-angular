import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerDiamondComponent } from 'spinners-angular/spinner-diamond';

const element = 'sa-spinner-diamond';

@NgModule({
  imports: [ BrowserModule ]
})
class SpinnerDiamondElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(element)) {
      customElements.define(
        element,
        createCustomElement(SpinnerDiamondComponent, { injector: this.injector })
      );
    }
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SpinnerDiamondElementModule)
  .catch(err => console.error(err));

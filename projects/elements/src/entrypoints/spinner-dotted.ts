import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerDottedComponent } from 'spinners-angular/spinner-dotted';

const element = 'sa-spinner-dotted';

@NgModule({
  imports: [ BrowserModule ]
})
class SpinnerDottedElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(element)) {
      customElements.define(
        element,
        createCustomElement(SpinnerDottedComponent, { injector: this.injector })
      );
    }
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SpinnerDottedElementModule)
  .catch(err => console.error(err));

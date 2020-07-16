import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerCircularSplitComponent } from 'spinners-angular/spinner-circular-split';

const element = 'sa-spinner-circular-split';

@NgModule({
  imports: [ BrowserModule ]
})
class SpinnerCircularSplitElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get(element)) {
      customElements.define(
        element,
        createCustomElement(SpinnerCircularSplitComponent, { injector: this.injector })
      );
    }
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SpinnerCircularSplitElementModule)
  .catch(err => console.error(err));

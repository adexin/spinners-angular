import { Injector, NgModule, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { SpinnerCircularComponent } from 'spinners-angular/spinner-circular';
import { SpinnerCircularFixedComponent } from 'spinners-angular/spinner-circular-fixed';
import { SpinnerCircularSplitComponent } from 'spinners-angular/spinner-circular-split';
import { SpinnerDottedComponent } from 'spinners-angular/spinner-dotted';
import { SpinnerInfinityComponent } from 'spinners-angular/spinner-infinity';
import { SpinnerDiamondComponent } from 'spinners-angular/spinner-diamond';
import { SpinnerRoundComponent } from 'spinners-angular/spinner-round';
import { SpinnerRoundFilledComponent } from 'spinners-angular/spinner-round-filled';
import { SpinnerRoundOutlinedComponent } from 'spinners-angular/spinner-round-outlined';

const spinners = {
  'sa-spinner-circular': SpinnerCircularComponent,
  'sa-spinner-circular-fixed': SpinnerCircularFixedComponent,
  'sa-spinner-circular-split': SpinnerCircularSplitComponent,
  'sa-spinner-dotted': SpinnerDottedComponent,
  'sa-spinner-infinity': SpinnerInfinityComponent,
  'sa-spinner-diamond': SpinnerDiamondComponent,
  'sa-spinner-round': SpinnerRoundComponent,
  'sa-spinner-round-filled': SpinnerRoundFilledComponent,
  'sa-spinner-round-outlined': SpinnerRoundOutlinedComponent,
};

@NgModule({
  imports: [ BrowserModule ]
})
class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    Object.keys(spinners).forEach(k => {
      if (!customElements.get(k)) {
        customElements.define(k, createCustomElement(spinners[k], { injector: this.injector }));
      }
    });
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

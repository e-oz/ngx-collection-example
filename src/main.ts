import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { PaintingsListComponent } from './app/paintings-list/paintings-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(PaintingsListComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule, 
    ])
  ]
});

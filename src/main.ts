import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FrontPageComponent } from './app/Components/front-page/front-page.component';
bootstrapApplication(FrontPageComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // ✅ Import HttpClientModule
  ]
}).catch(err => console.error(err));

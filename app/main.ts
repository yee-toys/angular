import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config';
import { AppComponent } from './component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

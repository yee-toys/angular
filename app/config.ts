import { ApplicationConfig } from '@angular/core';

import { provideClientHydration } from '@angular/platform-browser';
import { provideYeeSubApp } from '../sub-app';
import { YeeLandingAbout, YeeLandingHome } from '../landing';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideYeeSubApp([
      {
        displayName: 'Home',
        component: YeeLandingHome
      },
      {
        displayName: 'About',
        routePath: 'about',
        component: YeeLandingAbout
      }
    ]),
    provideRouter([
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
      }
    ]),
    provideClientHydration()
  ]
};

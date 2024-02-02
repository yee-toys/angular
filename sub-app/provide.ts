import { EnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';
import { YeeSubAppComponent } from './component';
import { YEE_SUB_APP_FEATURES, YeeSubAppFeatures } from './feature';
import { YeeSubAppNavigation } from './navigation';
import { YeeSubAppOptions } from './options';

export function provideYeeSubApp(optionsOrFeatures: YeeSubAppOptions | YeeSubAppFeatures): EnvironmentProviders {
  const subAppOptions: YeeSubAppOptions = Array.isArray(optionsOrFeatures) ?
    {features: optionsOrFeatures} : optionsOrFeatures as YeeSubAppOptions;

  const firstFeature = subAppOptions.features[0];
  return provideRouter([
    {
      path: subAppOptions.routerPath || '',
      component: YeeSubAppComponent,
      children: [
        ...subAppOptions.features.map(feature => {
          return {
            path: feature.routePath || '',
            component: feature.component
          };
        }),
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: firstFeature.routePath || ''
        }
      ],
      providers: [
        {
          provide: YEE_SUB_APP_FEATURES,
          useValue: subAppOptions.features
        },
        {
          provide: YeeSubAppNavigation
        }
      ]
    }
  ]);
}

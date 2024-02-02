import { InjectionToken, Type } from '@angular/core';

export interface YeeSubAppFeature {
  readonly displayName: string;
  readonly routePath?: string;
  readonly component: Type<unknown>;
}

export type YeeSubAppFeatures = readonly YeeSubAppFeature[];

export const YEE_SUB_APP_FEATURES = new InjectionToken<YeeSubAppFeatures>('Sub app features');

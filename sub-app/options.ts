import { YeeSubAppFeatures } from './feature';

export interface YeeSubAppOptions {
  readonly routerPath?: string;
  readonly features: YeeSubAppFeatures;
}

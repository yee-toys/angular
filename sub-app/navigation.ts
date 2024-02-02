import { Observable, ReplaySubject } from 'rxjs';
import { YeeSubAppNavItems } from './nav-item';
import { Inject, Injectable } from '@angular/core';
import { YEE_SUB_APP_FEATURES, YeeSubAppFeatures } from './feature';

@Injectable()
export class YeeSubAppNavigation extends Observable<YeeSubAppNavItems> {
  private _subject = new ReplaySubject<YeeSubAppNavItems>(1);

  constructor(@Inject(YEE_SUB_APP_FEATURES) features: YeeSubAppFeatures) {
    super(subscriber => this._subject.subscribe(subscriber));
    this._subject.next(
      features.map(feature => ({
        label: feature.displayName,
        routerLink: feature.routePath ?? ''
      }))
    );
  }
}

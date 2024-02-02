import { Component, Inject, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { NgForOf } from '@angular/common';
import { YeeSubAppNavItems } from './nav-item';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { YeeSubAppNavigation } from './navigation';

@Component({
  selector: 'yee-sub-app',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  template: `
      <h1>Sub App</h1>

      <ul>
          <ng-template ngFor [ngForOf]="_navItems" let-navItem>
              <li [routerLink]="navItem.routerLink"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{ exact: !navItem.routerLink.length }"
              >{{navItem.label}}</li>
          </ng-template>
      </ul>

      <router-outlet/>
  `,
  styles: `
    li.active {
      font-weight: bold;
    }
  `,
})
export class YeeSubAppComponent implements OnDestroy {
  private _destroy = new Subject<void>();
  _navItems: YeeSubAppNavItems = [];

  constructor(@Inject(YeeSubAppNavigation) navigation$: Observable<YeeSubAppNavItems>) {
    navigation$.pipe(
      takeUntil(this._destroy),
      tap<YeeSubAppNavItems>(navItems => this._navItems = navItems)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }
}

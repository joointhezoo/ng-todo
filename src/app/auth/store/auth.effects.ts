import {Actions, Effect} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private router: Router) { }

  @Effect({dispatch: false})
  authLogin = this.action$
    .ofType(AuthActions.LOGIN)
    .pipe(tap((action: AuthActions.Login) => {
      this.router.navigate(['/todo']);
    }) );


  @Effect({dispatch: false})
  authLogout = this.action$
    .ofType(AuthActions.LOGOUT)
    .pipe(tap((action: AuthActions.Logout) => {
      this.router.navigate(['/signin']);
    }) );

}

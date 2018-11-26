import {Actions, Effect} from '@ngrx/effects';
import {map, tap, switchMap, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {from} from 'rxjs';

import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private router: Router) { }

  @Effect()
  authSignup = this.action$
    .ofType(AuthActions.SIGN_UP)
    .pipe(map((action: AuthActions.Signup) => {
        return action.payload;
      }),
      switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      }),
      tap(() => {
        this.router.navigate(['/todo']);
      })
    );

  @Effect()
  authLogin  = this.action$
    .ofType(AuthActions.LOGIN)
    .pipe(map((action: AuthActions.Login) => {
      return action.payload;
    }),
    switchMap((authData: {username: string, password: string}) => {
      return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    }),
    switchMap((res) => {
        this.router.navigate(['/todo']);
        return [{type: AuthActions.SET_USER_ID}, {type: AuthActions.SET_USER_ID, payload:  res.user.uid}];
    })
    );

  @Effect({dispatch: false})
  authLogout = this.action$
    .ofType(AuthActions.LOGOUT)
    .pipe(tap((action: AuthActions.Logout) => {
      this.router.navigate(['/signin']);
    }) );

}

import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';
export const SET_USER_ID = 'SET_USER_ID';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: any = null) { }
}


export class Signup implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: { username: string, password: string }) {}
}

export class SetUserId implements Action {
  readonly type = SET_USER_ID;
  constructor(public payload: string) {}
}


export type AuthActions =
  Login |
  Logout |
  Signup |
  SetUserId ;

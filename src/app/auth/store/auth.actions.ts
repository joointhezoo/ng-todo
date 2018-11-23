import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_DB = 'GET_DB';
export const SIGN_UP = 'SIGN_UP';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: any = null) { }
}

export class GetDB implements Action {
  readonly type = GET_DB;
  constructor(public payload: string) { }
}

export class Signup implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: { username: string, password: string }) {}
}
export type AuthActions =
  Login |
  Logout |
  GetDB |
  Signup;

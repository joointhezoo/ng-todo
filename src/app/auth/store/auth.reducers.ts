import * as AuthActions from './auth.actions';
export interface State {
  authenticated: boolean;
}

const initState: State = {
  authenticated: false
};

export function AuthReducer(state = initState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.LOGIN):
      return {
        ...state,
        authenticated: true
      };

    case (AuthActions.LOGOUT):
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}

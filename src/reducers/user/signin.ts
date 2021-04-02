import { UserInfo } from '.';

import { createRequestActionTypes } from '@src/util/saga';

export const [SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestActionTypes('user/SIGNIN');
export const LOAD_USER = `user/LOAD_USER`;

type SignInAction = Readonly<{
  readonly type: 'SIGNIN_REQUEST';
  payload: { email: string; password: string };
}>;
type LoadUserAction = Readonly<{
  readonly type: `user/LOAD_USER`;
  payload: { info: UserInfo };
}>;

export const signIn = (email: string, password: string): SignInAction => {
  return {
    type: SIGNIN_REQUEST,
    payload: { email, password },
  };
};
export const loadUser = (info: UserInfo): LoadUserAction => {
  return {
    type: LOAD_USER,
    payload: { info },
  };
};

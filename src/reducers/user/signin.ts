import { createRequestActionTypes } from '@src/util/saga';

export const [SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestActionTypes('user/SIGNIN');

type SignInAction = Readonly<{
  readonly type: 'SIGNIN_REQUEST';
  payload: { email: string; password: string };
}>;

export const signIn = (email: string, password: string): SignInAction => {
  return {
    type: SIGNIN_REQUEST,
    payload: { email, password },
  };
};

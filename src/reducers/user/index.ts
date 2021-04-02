import produce from 'immer';

import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, LOAD_USER } from './signIn';

export interface UserInfo {
  token: string;
  userid: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
}

export interface UserInitialState {
  info: UserInfo | null;
  authError: null | Error;
}

const initialState: UserInitialState = {
  info: null,
  authError: null,
};

type ReducerAction = typeof SIGNIN_REQUEST;

//모든 user 상태 처리
const user = (state: UserInitialState = initialState, action: ReducerAction) =>
  produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      case SIGNIN_REQUEST:
        return { info: null, authError: null };
      case SIGNIN_SUCCESS:
        return { ...state, info: Object.assign({ token: action.payload.token }, action.payload.user) };
      case SIGNIN_FAILURE:
        return { ...state, authError: action.payload };
      case LOAD_USER:
        return { ...state, info: action.payload.info };
    }
  });

export default user;

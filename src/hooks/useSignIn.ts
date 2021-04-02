import { useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';

import { RootState } from '@src/reducers';
import { signIn, loadUser } from '@src/reducers/user/signIn';

const useSignIn = (): {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  message: string;
  signIn: () => void;
} => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);

  const [cookie, setCookie] = useCookies(['user']);
  const [email, setEmail] = useState('test123@test.com');
  const [password, setPassword] = useState('testpassword');

  useEffect(() => {
    if (info?.token) {
      setCookie('user', info.token, {
        path: '/',
        maxAge: 3600, // 1hr
        sameSite: true,
      });
    }
  }, [info]);

  useEffect(() => {
    if (cookie.user) {
      const decodedUserInfo = jwt.decode(cookie.user);
      dispatch(loadUser(decodedUserInfo));
    }
  }, [cookie]);

  // test메세지
  const [message, setMessage] = useState(`You're not logged in`);
  useEffect(() => {
    if (info) {
      setMessage(`Welcome. You are ${info.name}`);
    }
  }, [info]);

  return {
    setEmail,
    setPassword,
    message,
    signIn: useCallback(() => dispatch(signIn(email, password)), [dispatch]),
  };
};

export default useSignIn;

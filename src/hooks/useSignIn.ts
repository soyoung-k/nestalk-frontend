import { signIn } from '@src/reducers/user/signIn';
import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

const useSignIn = (): {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  signIn: () => void;
} => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('test123@test.com');
  const [password, setPassword] = useState('testpassword');

  return {
    setEmail,
    setPassword,
    signIn: useCallback(() => dispatch(signIn(email, password)), [dispatch]),
  };
};

export default useSignIn;

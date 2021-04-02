import { RootState } from '@src/reducers';
import { signIn } from '@src/reducers/user/signIn';
import { useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useSignIn = (): {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  message: string;
  signIn: () => void;
} => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState('test123@test.com');
  const [password, setPassword] = useState('testpassword');

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

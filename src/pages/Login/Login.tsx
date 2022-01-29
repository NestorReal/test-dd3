import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../config/app/hooks';
import LoginForm from '../../components/organisms/Login';
import LoginPageContainer from './styled';
import { login } from '../../features/authSlice';
import { LoginArguments } from '../../types/auth';

interface LocationState {
  from: {
    pathname: string;
  };
}

const Login = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { from } = (location.state as LocationState) || {
    from: { pathname: '/' },
  };

  const pathname = from.pathname || '/';

  const onSubmit = async (values: LoginArguments) => dispatch(login(values)).unwrap();

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={onSubmit} link="/password-recovery" redirectAfterLoginTo={pathname} />
    </LoginPageContainer>
  );
};

export default Login;

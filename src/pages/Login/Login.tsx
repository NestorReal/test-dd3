import React from 'react';
import { useAppDispatch } from '../../config/app/hooks';
import LoginForm from '../../components/organisms/Login';
import LoginPageContainer from './styled';
import { login } from '../../features/authSlice';
import { LoginArguments } from '../../types/auth';

const Login = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (values: LoginArguments) => dispatch(login(values)).unwrap();

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={onSubmit} link="/password-recovery" />
    </LoginPageContainer>
  );
};

export default Login;

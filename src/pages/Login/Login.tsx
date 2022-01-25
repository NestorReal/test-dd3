import React from 'react';
import LoginForm from '../../components/organisms/Login';
import LoginPageContainer from './styled';

const Login = () => (
  <LoginPageContainer>
    <LoginForm
      onSubmit={
        // TODO: put here redux action
        () => {}
      }
      link="/password-recovery"
    />
  </LoginPageContainer>
);

export default Login;

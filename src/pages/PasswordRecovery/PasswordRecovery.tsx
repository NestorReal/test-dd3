import React from 'react';
import ForgotPassword from '../../components/organisms/ForgotPassword';
import PasswordRecoveryPageContainer from './styled';

const PasswordRecovery = () => (
  <PasswordRecoveryPageContainer>
    <ForgotPassword
      onSubmit={
        // TODO: put here redux action
        () => {}
      }
      link="/login"
    />
  </PasswordRecoveryPageContainer>
);

export default PasswordRecovery;

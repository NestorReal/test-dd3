import React from 'react';
import { useAppDispatch } from '../../config/app/hooks';
import ForgotPassword from '../../components/organisms/ForgotPassword';
import PasswordRecoveryPageContainer from './styled';
import { passwordRecover } from '../../features/authSlice';
import { PassRecoverArguments } from '../../types/auth';

const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (values: PassRecoverArguments) =>
    dispatch(passwordRecover(values)).unwrap();
  return (
    <PasswordRecoveryPageContainer>
      <ForgotPassword onSubmit={onSubmit} link="/login" />
    </PasswordRecoveryPageContainer>
  );
};

export default PasswordRecovery;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../config/app/hooks';
import ConfirmPassword from '../../components/organisms/ConfirmPassword';
import PasswordResetPageContainer from './styled';
import { setNewPassword } from '../../features/authSlice';
import { PassResetArguments } from '../../types/auth';

const PasswordReset = () => {
  const { uid, token } = useParams();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: PassResetArguments) =>
    dispatch(setNewPassword({ ...values, uid: uid || '', token: token || '' })).unwrap();

  return (
    <PasswordResetPageContainer>
      <ConfirmPassword onSubmit={onSubmit} />
    </PasswordResetPageContainer>
  );
};

export default PasswordReset;

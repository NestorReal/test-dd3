/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormButton from '../../atoms/FormButton';
import CustomLink from '../../atoms/CustomLink';
import Logo from '../../atoms/Logo';
import LyticaLogo from '../../../static/images/logo.png';
import {
  StyleForm,
  FormButtonContainer,
  Message,
  UserMessage,
  MessageContainer,
  ErrorMessageContainer,
} from './style';
import Container from '../../reusableStyledComponents/Container';
import CustomField from '../../atoms/CustomField';

const formValidation = Yup.object().shape({
  new_password1: Yup.string().required('Este campo es requerido.'),
  new_password2: Yup.string()
    .required('Este campo es requerido.')
    .oneOf(
      [Yup.ref('new_password1'), null],
      'Las contraseñas no coinciden. Verifica que sea igual que la anterior.',
    ),
});

interface IConfirmPassword {
  /**
   * add the function you need
   */
  onSubmit: Function;
}

const ConfirmPassword = ({ onSubmit }: IConfirmPassword) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [userMessage, setUserMessage] = useState('');

  return (
    <Formik
      initialValues={{
        new_password1: '',
        new_password2: '',
      }}
      validationSchema={formValidation}
      onSubmit={async (values) => {
        try {
          const result = await onSubmit(values);
          if (result) {
            setUserMessage(result.detail);
            setErrorMessage('');
          }
        } catch (error) {
          if (typeof error === 'string') {
            setErrorMessage(error);
            setUserMessage('');
          }
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <StyleForm>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={8}>
            <Logo url={LyticaLogo} />
          </Container>
          <div>
            <Message>Ingresa los siguientes datos para reestablecer tu contraseña</Message>
            <Form>
              <CustomField
                label="Nueva contraseña"
                name="new_password1"
                placeholder="Nueva contraseña"
                required
                type="password"
              />
              <br />
              <CustomField
                label="Confirmar nueva contraseña"
                name="new_password2"
                placeholder="Nueva contraseña"
                required
                type="password"
              />
              <br />
              <br />
              <FormButtonContainer>
                <FormButton
                  borderRadius={6}
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  primary
                >
                  Reestablecer
                </FormButton>
              </FormButtonContainer>
            </Form>
            {errorMessage && <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>}
            {userMessage && (
              <MessageContainer>
                <UserMessage>{userMessage}</UserMessage>
                <CustomLink to="/login">Regresar al login</CustomLink>
              </MessageContainer>
            )}
          </div>
        </StyleForm>
      )}
    </Formik>
  );
};

export default ConfirmPassword;

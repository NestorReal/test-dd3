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
  ErrorMessageContainer,
} from './style';
import Container from '../../reusableStyledComponents/Container';
import CustomField from '../../atoms/CustomField';

const formValidation = Yup.object().shape({
  email: Yup.string().required('Este campo es requerido').email('Introduce un email válido'),
});

interface IForgotPassword {
  /**
   * Fucntion to execute when for is submitted
   */
  onSubmit: Function;
  /**
   * A string to redirect on link click
   */
  link: string;
}

const ForgotPassword = ({ onSubmit, link }: IForgotPassword) => {
  const [userMessage, setUserMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Formik
      initialValues={{
        email: '',
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

          <Container marginBottom={7}>
            <Message>Ingrese su correo electrónico para reestablecer la contraseña</Message>
          </Container>

          <Form>
            <CustomField
              label="Correo electrónico"
              name="email"
              placeholder="Correo electrónico"
              required
              type="text"
            />

            <FormButtonContainer>
              <FormButton
                borderRadius={6}
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                loading={isSubmitting}
                primary
              >
                Restablecer contraseña
              </FormButton>
            </FormButtonContainer>
            <Container
              marginTop={7}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {errorMessage && <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>}
              {userMessage && <UserMessage>{userMessage}</UserMessage>}
              <CustomLink to={link}>Regresar al login</CustomLink>
            </Container>
          </Form>
        </StyleForm>
      )}
    </Formik>
  );
};

export default ForgotPassword;

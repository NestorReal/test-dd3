/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import LyticaLogo from '../../../../static/images/logo.png';
import { StyleForm, ContainerForm } from './style';
import Container from '../../reusableStyledComponents/Container';
import CustomField from '../../atoms/CustomField';
import StyledText from '../../reusableStyledComponents/StyledText';

const formValidation = Yup.object().shape({
  email: Yup.string()
    .required('Este campo es requerido')
    .email(),
});

interface IForgotPassword {
  /**
   * add the function you need
   */
  onSubmit: any;
}

const ForgotPassword = ({ onSubmit }: IForgotPassword) => (
  <ContainerForm display="flex" justifyContent="center" alignItems="center">
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={formValidation}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <StyleForm>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={8}>
            <Logo url={LyticaLogo} />
          </Container>
          <div>
            <StyledText typography="paragraph1">
              Ingrese su correo electrónico para restablecer la contraseña
            </StyledText>
            <br />
            <br />
            <Form>
              <CustomField
                label="Correo electrónico"
                name="email"
                placeholder="Correo electrónico"
                required
                type="text"
              />
              <br />
              <br />
              <div className="containerButton">
                <Button
                  async
                  borderRadius={6}
                  type="submit"
                  onClick={() => new Promise((resolve) => {
                    setTimeout(() => {
                      handleSubmit();
                      resolve('resolved');
                    }, 2000);
                  })}
                  primary
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </div>
        </StyleForm>
      )}
    </Formik>
  </ContainerForm>
);

export default ForgotPassword;

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

const formValidation = Yup.object().shape({
  user: Yup.string()
    .required('Este campo es requerido'),
  pass: Yup.string()
    .required('Este campo es requerido'),
});

interface ILogin {
  /**
   * add the function you need
   */
  onSubmit: any;
  /**
   * link you want to go to
   */
   link: string;
}

const Login = ({ onSubmit, link }: ILogin) => (
  <ContainerForm display="flex" justifyContent="center" alignItems="center">
    <Formik
      initialValues={{
        user: '',
        pass: '',
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
            <Form>
              <CustomField
                label="Usuario"
                name="user"
                placeholder="Usuario"
                required
                type="text"
              />
              <br />
              <CustomField
                label="Contraseña"
                name="pass"
                placeholder="Contraseña"
                required
                type="password"
              />
              <br />
              <a href={link}>Olvidé mi contraseña</a>
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

export default Login;

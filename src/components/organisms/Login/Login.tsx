/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormButton from '../../atoms/FormButton';
import CustomLink from '../../atoms/CustomLink';
import Logo from '../../atoms/Logo';
import LyticaLogo from '../../../static/images/logo.png';
import { StyleForm, FormButtonContainer } from './style';
import Container from '../../reusableStyledComponents/Container';
import CustomField from '../../atoms/CustomField';

const formValidation = Yup.object().shape({
  username: Yup.string().required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido'),
});

interface ILogin {
  /**
   * Function to execute when form is submitted
   */
  onSubmit: Function;
  /**
   * A sring to redirect when clicks on link
   */
  link: string;
}

const Login = ({ onSubmit, link }: ILogin) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={formValidation}
    onSubmit={async (values) => {
      try {
        const result = await onSubmit(values);
        // eslint-disable-next-line no-console
        console.log('result', result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }}
  >
    {({ handleSubmit, isSubmitting }) => (
      <StyleForm>
        <Container display="flex" alignItems="center" justifyContent="center" marginBottom={8}>
          <Logo url={LyticaLogo} />
        </Container>

        <Form>
          <CustomField label="Usuario" name="username" placeholder="Usuario" required type="text" />
          <br />
          <CustomField
            label="Contraseña"
            name="password"
            placeholder="Contraseña"
            required
            type="password"
          />
          <br />
          <CustomLink to={link}>Olvidé mi contraseña</CustomLink>
          <FormButtonContainer>
            <FormButton
              borderRadius={6}
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              loading={isSubmitting}
              primary
            >
              Ingresar
            </FormButton>
          </FormButtonContainer>
        </Form>
      </StyleForm>
    )}
  </Formik>
);

export default Login;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StyleForm, Message, TitleMessage, MessageBold, Grid, FormButtonContainer } from './style';
import ButtonCard from '../../molecules/ButtonCard';
import Container from '../../reusableStyledComponents/Container';
import FormButton from '../../atoms/FormButton';

interface IInstructions {
  /**
   * function
   */
   onchange: Function;
}

const Login = ({ onchange }: IInstructions) => (
  <StyleForm>
    <Container display="flex" alignItems="center" justifyContent="center" marginBottom={1}>
      <TitleMessage>Cómo jugar</TitleMessage>
    </Container>
    <Container marginBottom={2}>
      <Message>Adivina la palabra oculta en cinco intentos</Message>
      <Message>Cada intento debe ser una palabra válida de 5 letras.</Message>
      <Message>
        Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de
        acertar la palabra.
      </Message>
      <MessageBold>Ejemplos</MessageBold>
    </Container>
    <Grid>
      <ButtonCard value="G" cardColor="#6AAA64" textColor="#000000" />
      <ButtonCard value="A" cardColor="white" textColor="#000000" />
      <ButtonCard value="T" cardColor="white" textColor="#000000" />
      <ButtonCard value="O" cardColor="white" textColor="#000000" />
      <ButtonCard value="S" cardColor="white" textColor="#000000" />
    </Grid>
    <Container marginBottom={2}>
      <Message>La letra G está en la palabra y en la posición correcta.</Message>
    </Container>
    <Grid>
      <ButtonCard value="V" cardColor="white" textColor="#000000" />
      <ButtonCard value="O" cardColor="white" textColor="#000000" />
      <ButtonCard value="C" cardColor="#CEB02C" textColor="#000000" />
      <ButtonCard value="A" cardColor="white" textColor="#000000" />
      <ButtonCard value="L" cardColor="white" textColor="#000000" />
    </Grid>
    <Container marginBottom={2}>
      <Message>La letra C está en la palabra pero en la posición incorrecta.</Message>
    </Container>
    <Grid>
      <ButtonCard value="C" cardColor="white" textColor="#000000" />
      <ButtonCard value="A" cardColor="white" textColor="#000000" />
      <ButtonCard value="N" cardColor="white" textColor="#000000" />
      <ButtonCard value="T" cardColor="white" textColor="#000000" />
      <ButtonCard value="O" cardColor="#939B9F" textColor="#000000" />
    </Grid>
    <Container marginBottom={8}>
      <Message>La letra O no está en la palabra.</Message>
    </Container>
    <Container marginBottom={2}>
      <Message>
        Puede haber letras repetidas. Las pistas son independientes para cada letra.
      </Message>
    </Container>
    <Container display="flex" alignItems="center" justifyContent="center" marginBottom={3}>
      <Message>¡Una palabra nueva cada 5 minutos!</Message>
    </Container>
    <Container display="flex" alignItems="center" justifyContent="center" marginBottom={3}>
      <FormButtonContainer>
        <FormButton borderRadius={5} type="submit" onClick={() => onchange('accept')} primary>
          !JUGAR¡
        </FormButton>
      </FormButtonContainer>
    </Container>
  </StyleForm>
);

export default Login;

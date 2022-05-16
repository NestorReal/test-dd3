/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  StyleForm,
  Message,
  TitleMessage,
  Grid,
  FormButtonContainer,
  MessageBold,
  MessageBoldBig,
} from './style';
import Container from '../../reusableStyledComponents/Container';
import FormButton from '../../atoms/FormButton';

interface IStats {
  /**
   * This is main value showd in card
   */
  plays: number;
  /**
   * This is main value text showd in card
   */
  victories: number;
  /**
   * This is main time showd in card
   */
  time: string;
  /**
   * This is main the word showd in card
   */
  word: string;
  /**
   * func
   */
  onChange: Function;
}

const Stats = ({ plays, victories, time, word, onChange }: IStats) => (
  <StyleForm>
    <Container display="flex" alignItems="center" justifyContent="center" marginBottom={8}>
      <TitleMessage>Estadísticas</TitleMessage>
    </Container>
    <Grid style={{ marginTop: '-50px' }}>
      <Container marginBottom={1} display="grid" alignItems="center" justifyContent="center">
        <div style={{ marginLeft: '25px' }}>
          <MessageBoldBig>{plays}</MessageBoldBig>
        </div>
        <div style={{ marginTop: '-30px' }}>
          <Message>Jugadas</Message>
        </div>
      </Container>
      <Container marginBottom={1} display="grid" alignItems="center" justifyContent="center">
        <div style={{ marginLeft: '25px' }}>
          <MessageBoldBig>{victories}</MessageBoldBig>
        </div>
        <div style={{ marginTop: '-30px' }}>
          <Message>Victorias</Message>
        </div>
      </Container>
    </Grid>
    <Container
      marginBottom={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '30px' }}
    >
      {word === '' ? null : <Message>SIGUIENTE PALABRA</Message>}
      <Message>SIGUIENTE PALABRA</Message>
    </Container>
    <Container
      marginBottom={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '-20px' }}
    >
      <MessageBold>{time}</MessageBold>
    </Container>
    <Container
      marginBottom={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '20px' }}
    >
      <FormButtonContainer>
        <FormButton borderRadius={5} type="submit" onClick={() => onChange()} primary>
          Aceptar
        </FormButton>
      </FormButtonContainer>
    </Container>
  </StyleForm>
);

export default Stats;

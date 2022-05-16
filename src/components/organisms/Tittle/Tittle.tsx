/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StyleForm, TitleMessage } from './style';
import Switch from '../../atoms/Switch';
import Container from '../../reusableStyledComponents/Container';
import Rectangle from '../../icons/Rectangle';
import Info from '../../icons/Info';

interface ITittle {
  /**
   * function
   */
   showStats: Function;
}

const Tittle = ({ showStats }: ITittle) => (
  <StyleForm>
    <Container display="flex" alignItems="center" justifyContent="center">
    <div style={{marginLeft: '20px', marginTop: '-20px'}}>
        <Info />
      </div>
      <div style={{marginLeft: '150px'}}>
        <TitleMessage>WORDLE</TitleMessage>
      </div>
      <div style={{marginLeft: '150px', marginTop: '-20px'}}>
        <Rectangle onClick={() => showStats('stats')} />
      </div>
      <div style={{marginTop: '-20px'}}>
        <Switch onChange={(event) => event} />
      </div>
    </Container>
  </StyleForm>
);

export default Tittle;

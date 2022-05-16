import React from 'react';
import { ContainerCard, ValueCard } from './styled';

interface IButtonCard {
  /**
   * This is main value showd in card
   */
  value: string;
   /**
   * This is main color text showd in card
   */
  textColor: string;
     /**
   * This is main color showd in card
   */
  cardColor: string;
}

const Card = ({ value, textColor, cardColor}: IButtonCard) => {
  let borderColor = '';
  if(cardColor === 'white'){
    borderColor = '1px solid #000000'
  }
  return(
  <ContainerCard style={{color: textColor, background: cardColor, border: borderColor }}>
    <ValueCard typography="heading2">{value}</ValueCard>
  </ContainerCard>
  );
};

export default Card;

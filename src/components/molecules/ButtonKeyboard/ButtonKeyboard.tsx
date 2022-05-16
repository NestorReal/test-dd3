import React from 'react';
import { ContainerCard, ValueCard } from './styled';

interface ICard {
  /**
   * This is main value showd in card
   */
  value: string | object;
   /**
   * This is main color text showd in card
   */
  textColor: string;
     /**
   * This is main color showd in card
   */
  cardColor: string;
}

const Card = ({ value, textColor, cardColor}: ICard) => {
  let borderColor = '';
  let width = '44.67px';
  if(cardColor === 'white'){
    borderColor = '1px solid #000000'
  }
  if(value === 'Enter' || typeof(value) === 'object'){
    width = '71.78px'
  }
  return(
  <ContainerCard style={{color: textColor, background: cardColor, border: borderColor, width }}>
    <ValueCard typography="paragraph3">{value}</ValueCard>
  </ContainerCard>
  );
};

export default Card;

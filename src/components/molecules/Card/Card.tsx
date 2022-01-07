import React from 'react';
import UpDown from '../../atoms/UpDown';
import { ContainerCard, TitleCard, ValueCard } from './styled';

interface ICard {
  /**
   * This is the card title
   */
  title: string;
  /**
   * This is main value showd in card
   */
  value: number;
  /**
   * This is a number to change increment/decrement behavior
   */
  upDown: number;
}

const Card = ({ title, value, upDown }: ICard) => (
  <ContainerCard>
    <TitleCard typography="caps2Regular" uppercase>
      {title}
    </TitleCard>
    <ValueCard typography="heading2">{value}</ValueCard>
    <UpDown value={upDown} width={40} height={20} top={58} right={19} />
  </ContainerCard>
);

export default Card;

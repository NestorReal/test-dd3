import React from 'react';
import UpDown from '../../atoms/UpDown';
import { ContainerCard, TitleCard, ValueCard } from './styled';
import { cardTypographies } from '../../../types/typography';

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

  upDownTypography: cardTypographies;
}

const Card = ({ title, value, upDown, upDownTypography = 'paragraph2' }: ICard) => (
  <ContainerCard>
    <TitleCard typography="caps2Regular" uppercase>
      {title}
    </TitleCard>
    <ValueCard typography="heading2">{value}</ValueCard>
    <UpDown value={upDown} top={62} right={19} typography={upDownTypography} />
  </ContainerCard>
);

export default Card;

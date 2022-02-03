import React from 'react';
import Item, { IconContainer } from './styled';
import ArrowDownRight from '../../icons/ArrowDownRight';
import ArrowUpRight from '../../icons/ArrowUpRight';
import { cardTypographies } from '../../../types/typography';

export interface IUpDown {
  /**
   * The number to show as a percentage, postive or negative value affects the component.
   */
  value: number;
  /**
   * modify the position of the component with measurement in px
   */
  top?: number;
  /**
   * modify the position of the component with measurement in px
   */
  bottom?: number;
  /**
   * modify the position of the component with measurement in px
   */
  left?: number;
  /**
   * modify the position of the component with measurement in px
   */
  right?: number;
  typography: cardTypographies;
}

const UpDown = ({ value, top, bottom, left, right, typography }: IUpDown) => (
  <Item value={value} top={top} bottom={bottom} left={left} right={right} typography={typography}>
    {Math.abs(value)}
    &#37;
    <IconContainer>{value < 0 ? <ArrowDownRight /> : <ArrowUpRight />}</IconContainer>
  </Item>
);

export default UpDown;

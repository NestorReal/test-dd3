import React from 'react';
import Item from './styled';
import ArrowDownRight from '../../icons/ArrowDownRight';
import ArrowUpRight from '../../icons/ArrowUpRight';

export interface IUpDown {
  /**
   * The number to show as a percentage, postive or negative value affects the component.
   */
  value: number;
  /**
   * component width measured in px
   */
  width: number;
  /**
   * component height measured in px
   */
  height: number;
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
}

const UpDown = ({
  value, width, height, top, bottom, left, right,
}: IUpDown) => (
  <Item
    value={value}
    width={width}
    height={height}
    top={top}
    bottom={bottom}
    left={left}
    right={right}
  >
    {value}
    &#37;
    {value < 0 ? <ArrowDownRight /> : <ArrowUpRight />}
  </Item>
);

export default UpDown;

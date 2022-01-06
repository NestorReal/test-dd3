import React from 'react';
import Container from '../../reusableStyledComponents/Container';
import Item from './styled';

export interface IAsideMenuItemProps {
  /**
   * Should appear as an item selected?
   */
  selected: boolean;
  /**
   * What is the name of the item in the menu?
   */
  name: string;
}

const AsideMenuItem = ({ selected, name }: IAsideMenuItemProps) => (
  <Container>
    <Item selected={selected}>{name}</Item>
  </Container>
);

export default AsideMenuItem;

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
    <Item typography="paragraph2" selected={selected} as="li">
      {name}
    </Item>
  </Container>
);

export default AsideMenuItem;

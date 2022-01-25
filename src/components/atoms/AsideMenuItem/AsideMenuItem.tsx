import React from 'react';
import ItemLink from './styled';

export interface IAsideMenuItemProps {
  /**
   * What is the name of the item in the menu?
   */
  name: string;
  to: string;
}

const AsideMenuItem = ({ name, to }: IAsideMenuItemProps) => <ItemLink to={to}>{name}</ItemLink>;

export default AsideMenuItem;

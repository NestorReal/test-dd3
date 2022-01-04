import React from 'react';
import AsideMenuItem from '../../atoms/AsideMenuItem';
import { MenuStyledContainer, MenuTitle } from './styled';
import Container from '../../reusableStyledComponents/Container';

export interface IAsideMenuProps {
  /**
   * Location url string, impacts item selected
   */
  location: string;
  /**
   * Title wich appears at the top of the aside menu
   */
  title: string;
}

const AsideMenu = ({ location, title }: IAsideMenuProps) => (
  <MenuStyledContainer>
    <Container paddingLeft={6} paddingTop={6} paddingBottom={6}>
      <MenuTitle typography="caps2Regular" uppercase>
        {title}
      </MenuTitle>
    </Container>

    <Container paddingLeft={4} paddingRight={4}>
      <AsideMenuItem name="Dashboard" selected={location === 'dashboard'} />
    </Container>

    <Container paddingLeft={4} paddingRight={4}>
      <AsideMenuItem name="Locaciones" selected={location === 'locations'} />
    </Container>
  </MenuStyledContainer>
);

export default AsideMenu;

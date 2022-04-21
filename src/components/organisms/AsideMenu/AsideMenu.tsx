import React from 'react';
import { useTranslation } from 'react-i18next';
import AsideMenuItem from '../../atoms/AsideMenuItem';
import { MenuStyledContainer, MenuTitle } from './styled';
import Container from '../../reusableStyledComponents/Container';

export interface IAsideMenuProps {
  /**
   * Title wich appears at the top of the aside menu
   */
  title: string;
}

const AsideMenu = ({ title }: IAsideMenuProps) => {
  const [t] = useTranslation("global");
  return (
    <MenuStyledContainer>
      <Container paddingLeft={6} paddingTop={6} paddingBottom={6}>
        <MenuTitle>{title}</MenuTitle>
      </Container>

      <Container paddingLeft={4} paddingRight={4}>
        <AsideMenuItem name={t("main_menu.dashboard")} to="/dashboard" />
      </Container>

      <Container paddingLeft={4} paddingRight={4}>
        <AsideMenuItem name={t("main_menu.locations")} to="/locations" />
      </Container>
    </MenuStyledContainer>
  );
}

export default AsideMenu;

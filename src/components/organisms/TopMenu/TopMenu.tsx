import React from 'react';
import Container from '../../reusableStyledComponents/Container';
import Logo from '../../atoms/Logo';
import UserMenuDropDown from '../../molecules/UserMenuDropDown';

export interface ITopMenuProps {
  /**
   * User name which is logged in
   */
  userName: string;
  /**
   * A url string to point to an image file
   */
  urlLogo: string;
  /**
   * A function in charge of close Session
   */
  onCloseSession: Function;
}

const TopMenu = ({ userName, urlLogo, onCloseSession }: ITopMenuProps) => (
  <Container display="flex" justifyContent="space-between" alignItems="center" width="100%">
    <Logo url={urlLogo} />
    <UserMenuDropDown userName={userName} onCloseSession={onCloseSession} />
  </Container>
);

export default TopMenu;

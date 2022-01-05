import React from 'react';
import FlexContainer from '../../reusableStyledComponents/FlexContainer';
import Logo from '../../atoms/Logo';
import UserMenuDropDown from '../../molecules/UserMenuDropDown';

interface ITopMenuProps {
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
  <FlexContainer justifyContent="space-between" alignItems="center">
    <Logo url={urlLogo} />
    <UserMenuDropDown userName={userName} onCloseSession={onCloseSession} />
  </FlexContainer>
);

export default TopMenu;

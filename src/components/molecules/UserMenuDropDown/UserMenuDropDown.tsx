import React, { useState } from 'react';
import UserMenu from '../../atoms/UserMenu';
import DropDown from '../../icons/DropDown';
import Container from '../../reusableStyledComponents/Container';
import { UserName, MenuContainer } from './styled';

interface IUserMenuDropDownProps {
  /**
   * A function in charge of close Session
   */
  onCloseSession: Function;

  /**
   * User name which is logged in
   */
  userName: string;
}

const UserMenuDropDown = ({ onCloseSession, userName }: IUserMenuDropDownProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <div>
      <Container display="flex" alignItems="center" cursor="pointer">
        <UserName typography="paragraph2" onClick={() => toggleOpen()}>
          {userName}
        </UserName>
        <DropDown onClick={() => toggleOpen()} />
      </Container>

      <MenuContainer>
        <UserMenu open={open} onCloseSession={onCloseSession} />
      </MenuContainer>
    </div>
  );
};

export default UserMenuDropDown;

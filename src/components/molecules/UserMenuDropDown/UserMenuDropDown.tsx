import React, { useState } from 'react';
import UserMenu from '../../atoms/UserMenu';
import DropDown from '../../icons/DropDown';
import Container from '../../reusableStyledComponents/Container';
import { UserName, MenuContainer } from './styled';
import useCloseOnClickOutside from '../../../hooks/useCloseOnClickOutside';

export interface IUserMenuDropDownProps {
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
  const closeDropDown = () => setOpen(false);
  const { ref } = useCloseOnClickOutside(open, closeDropDown);

  return (
    <div>
      <Container
        ref={ref}
        display="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() => toggleOpen()}
      >
        <UserName onClick={() => toggleOpen()}>{userName}</UserName>
        <DropDown onClick={() => toggleOpen()} />
      </Container>

      <MenuContainer>
        <UserMenu open={open} onCloseSession={onCloseSession} />
      </MenuContainer>
    </div>
  );
};

export default UserMenuDropDown;

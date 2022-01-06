import * as React from 'react';
import { StyledUserMenu, MenuItem } from './styled';
import ShadowBox from '../../reusableStyledComponents/ShadowBox';

export interface IUserMenuProps {
  /**
   * Should be open?
   */
  open: boolean;

  /**
   * A function in charge of close Session
   */
  onCloseSession: Function;
}

const UserMenu = ({ open, onCloseSession }: IUserMenuProps) => (
  <StyledUserMenu open={open}>
    <ShadowBox>
      <MenuItem onClick={() => onCloseSession()}>Cerrar Sesión</MenuItem>
    </ShadowBox>
  </StyledUserMenu>
);

export default UserMenu;

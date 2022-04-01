import * as React from 'react';
import { useTranslation } from 'react-i18next';
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

const UserMenu = ({ open, onCloseSession }: IUserMenuProps) => {
  const [t] = useTranslation("global");

  return(
    <StyledUserMenu open={open}>
      <ShadowBox>
        <MenuItem onClick={() => onCloseSession()}>
          {t("header.sign_off")}
        </MenuItem>
      </ShadowBox>
    </StyledUserMenu>
  );
};

export default UserMenu;

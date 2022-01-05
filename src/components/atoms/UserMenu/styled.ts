import styled from 'styled-components';
import StyledText from '../../reusableStyledComponents/StyledText';
import space from '../../../config/spacing';

interface IStyledUserMenuProps {
  open: boolean;
}

export const StyledUserMenu = styled.div<IStyledUserMenuProps>`
  transition: opacity 0.15s ease, transform 0.25s ease;
  background: ${(props) => props.theme.background.topmenu};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(0)')};
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const MenuItem = styled(StyledText)`
  background: ${(props) => props.theme.background.topmenu};
  border-bottom: 1px solid ${(props) => props.theme.borders.usermenu};
  color: ${(props) => props.theme.text.topmenu.main};
  padding: ${space[4]};
  cursor: pointer;
  text-align: center;
  min-width: 90px;
  &:hover {
    background: ${(props) => props.theme.background.topmenuHovered};
  }
`;

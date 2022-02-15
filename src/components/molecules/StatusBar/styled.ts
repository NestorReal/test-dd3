import styled from 'styled-components';
import fontTypes from '../../../config/font';
import spaces from '../../../config/spacing';
import { asideMenuWidth } from '../../../layouts/Main/styled';

interface IStatusBarStyled {
  hidden: Boolean;
}

export const StatusBarStyled = styled.div<IStatusBarStyled>`
  display: flex;
  background: ${(props) => props.theme.background.aside.main};
  color: ${(props) => props.theme.text.filters.title};
  width: calc(100% - ${asideMenuWidth}px);
  height: 45px;
  padding: 0 ${spaces[6]};
  position: fixed;
  top: 0px;
  justify-content: space-between;
  z-index: 20000;
  transition: all 0.25s ease;
  transform: ${(props) => (props.hidden ? `translateY(-3000px)` : `transformY(0)`)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
`;

export const BartextContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  ${fontTypes.paragraph3}
`;

export const BarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

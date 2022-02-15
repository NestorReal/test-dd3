import styled from 'styled-components';
import space from '../../config/spacing';

export interface IAsideMenuContainerProps {
  top: number;
}

const asideMenuWidth = 230;
const topMenuHeight = 120;

export const FullContainer = styled.div`
  margin-left: ${asideMenuWidth}px;
  padding-left: ${space[8]};
  padding-right: ${space[8]};
  padding-top: ${space[6]};
  padding-bottom: ${space[1]};
  background-color: ${(props) => props.theme.background.main};
`;

export const AsideMenuContainer = styled.div<IAsideMenuContainerProps>`
  width: ${asideMenuWidth}px;
  position: fixed;
  top: ${(props) => `${props.top}px`};
  height: 100%;
`;

export const TopMenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${topMenuHeight}px;
  padding-left: ${space[8]};
  padding-right: ${space[8]};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
`;

export const InsideContainer = styled.div`
  display: flex;
`;

export const IndividualContainer = styled.div`
  &:not(:first-child) {
    margin-left: ${space[4]};
  }
`;

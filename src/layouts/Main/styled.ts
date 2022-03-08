import styled from 'styled-components';
import space from '../../config/spacing';

export interface IAsideMenuContainerProps {
  top: number;
}

export const asideMenuWidth = 230;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 1425px) {
    flex-direction: row;
  }
`;

export const IndividualContainer = styled.div`
  width: 100%;
  &:not(:first-child) {
    margin-left: 0;
  }

  @media (min-width: 865px) {
    &:not(:first-child) {
      margin-left: ${space[4]};
    }
  }
`;

export const BarContainer = styled.div`
  margin-left: ${asideMenuWidth}px;
`;

export const FilterDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 1425px) {
    &:not(:first-child) {
      margin-left: ${space[4]};
    }
  }

  @media (min-width: 865px) {
    flex-direction: row;
  }
`;

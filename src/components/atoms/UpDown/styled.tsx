import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import { cardTypographies } from '../../../types/typography';

interface IItemProps {
  typography: cardTypographies;
  value: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Item = styled.div<IItemProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.value < 0
      ? props.theme.background.datacard.decrement
      : props.theme.background.datacard.increment};
  color: ${(props) =>
    props.value < 0 ? props.theme.text.datacard.decrement : props.theme.text.datacard.increment};
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  border-radius: 6px;
  padding: 0 ${space[5]} 0 ${space[2]};
  ${(props) => fontTypes[`${props.typography}`]}

  @media (max-width: 1000px) {
    ${fontTypes.paragraph3}
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25%;
  right: 5%;
`;
export default Item;

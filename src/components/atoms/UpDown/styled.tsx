import styled from 'styled-components';
import fontTypes from '../../../config/font';

interface IItemProps {
  value: number;
  width: number;
  height: number;
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
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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
  ${fontTypes.caps3Bold};
  border-radius: 6px;
`;

export default Item;

import styled from 'styled-components';
import fontTypes from '../../../config/font';

interface IStyledButton {
  primary?: boolean;
  onClick: Function;
  height?: number;
  width?: number;
  borderRadius?: number;
}

const StyledButton = styled.button<IStyledButton>`
  height: ${(props) => (props.height)}px;
  width: ${(props) => (props.width)}px;
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '0px')};;
  border: none;
  background: ${(props) => (props.primary ? props.theme.background.button.primary : props.theme.background.button.secondary)};
  text-align: center;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.primary ? props.theme.background.button.secondary : props.theme.background.button.primary)};
  ${fontTypes.paragraph3}
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.7 : 0.9)};
  }
`;

export default StyledButton;

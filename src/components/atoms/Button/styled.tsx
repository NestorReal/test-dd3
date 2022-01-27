import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import { buttonTypographies } from '../../../types/typography';

interface IStyledButton {
  primary?: boolean;
  borderRadius?: number;
  typography: buttonTypographies;
}

const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '0px')};
  border: 2px solid ${(props) => props.theme.background.button.primary};
  background: ${(props) =>
    props.primary
      ? props.theme.background.button.primary
      : props.theme.background.button.secondary};
  text-align: center;
  padding: ${space[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.primary
      ? props.theme.background.button.secondary
      : props.theme.background.button.primary};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.7 : 0.9)};
  }
  height: inherit;
  ${(props) => fontTypes[`${props.typography}`]}
`;

export default StyledButton;

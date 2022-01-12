import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';

interface IContainerButton {
  primary?: boolean;
  onClick: Function;
}

const ContainerButton = styled.button<IContainerButton>`
  height: 28px;
  border: none;
  background: ${(props) => (props.primary ? props.theme.background.button.primary : props.theme.background.button.secondary)};
  text-align: center;
  padding: 0 ${space[4]};
  color: ${(props) => (props.primary ? props.theme.background.button.secondary : props.theme.background.button.primary)};
  ${fontTypes.paragraph3}
  font-weight: normal;
  &:hover {
    opacity: 0.9;
  }
`;

export default ContainerButton;

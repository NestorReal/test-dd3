import styled from 'styled-components';

export interface IContainerGroupButton {
  width: number;
}
const ContainerGroupButton = styled.div<IContainerGroupButton>`
  width: ${(props) => props.width}px;
  height: auto;
  background: ${(props) => props.theme.background.main};
  display: flex;
  button {
    margin: 0px;
    border: solid 1px ${(props) => props.theme.borders.groupbutton};
  }
  button:first-child {
    border-radius: 6px 0 0 6px;
  }
  button:last-child {
    border-radius: 0 6px 6px 0;
  }
`;

export default ContainerGroupButton;

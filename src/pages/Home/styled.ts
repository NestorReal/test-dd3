import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${(props) => props.theme.background.main};
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerStats = styled.div`
  display: flex;
  position: absolute;
  width: 1031px;
  height: 1132px;
  top: 0px;
  justify-content: center;
  align-items: center;
`;

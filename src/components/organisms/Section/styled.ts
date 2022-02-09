import styled from 'styled-components';
import spaces from '../../../config/spacing';

export const SectionStyled = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
`;

export const TitleStyled = styled.div`
  padding-left: 30px;
  width: 100%;
  height: 60px;
  border-bottom: solid 2px #e8e8e8;
  display: flex;
  align-items: center;
`;

export const ContainerChildren = styled.div`
  width: 100%;
  padding: ${spaces[8]} 0 ${spaces[8]} 0;
`;
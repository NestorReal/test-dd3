import styled from 'styled-components';
import space from '../../../config/spacing';

export const SectionStyled = styled.div`
  width: 100%;
  padding-left: ${space[8]};
  padding-right: ${space[8]};
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.secondary};
  margin-bottom: ${space[6]};
  margin-top: ${space[6]};
`;

export const TitleStyled = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: solid 2px #e8e8e8;
  display: flex;
  align-items: center;
`;

export const ContainerChildren = styled.div`
  width: 100%;
`;

import styled from 'styled-components';
import fontTypes from '../../config/font';
import spaces from '../../config/spacing';

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.background.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-bottom: 75px;
  margin-top: 60px;
`;
export const PageTitle = styled.div`
  ${fontTypes.heading1}
`;

export const Message = styled.div`
  color: ${(props) => props.theme.text.message};
  margin-bottom: ${spaces[4]};
  ${fontTypes.paragraph2};
`;

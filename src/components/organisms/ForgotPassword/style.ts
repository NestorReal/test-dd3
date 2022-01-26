import styled from 'styled-components';
import fontTypes from '../../../config/font';

export const StyleForm = styled.div`
  width: 600px;
  height: auto;
  background: #fff;
  padding: 40px 60px;
  border-radius: 8px;
`;

export const FormButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 32px;
`;

export const Message = styled.p`
  color: ${(props) => props.theme.text.field.main};
  ${fontTypes.paragraph2}
`;

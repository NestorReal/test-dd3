import styled from 'styled-components';
import fontTypes from '../../../config/font';
import spaces from '../../../config/spacing';

export const StyleForm = styled.div`
  width: 483px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: ${(props) => props.theme.text.field.main};
  ${fontTypes.paragraph2}
`;

export const UserMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.text.section.title};
  ${fontTypes.paragraph2}
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin-top: ${spaces[3]};
  color: ${(props) => props.theme.text.message.error};
  text-align: center;
`;

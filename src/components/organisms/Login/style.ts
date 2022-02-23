import styled from 'styled-components';
import spaces from '../../../config/spacing';

export const StyleForm = styled.div`
  width: 600px;
  height: auto;
  background: #fff;
  padding: 40px 60px;
  border-radius: 8px;

  a {
    color: ${(props) => props.theme.text.datacard.title};
    font-size: 16px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 32px;
`;

export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin-top: ${spaces[3]};
  color: ${(props) => props.theme.text.message.error};
  text-align: center;
`;

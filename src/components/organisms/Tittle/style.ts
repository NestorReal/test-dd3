import styled from 'styled-components';
import spaces from '../../../config/spacing';
import fontTypes from '../../../config/font';

export const StyleForm = styled.div`
  width: 638px;
  height: 84px;

  background: #f3f3f3;
  border-radius: 15px;

  a {
    color: ${(props) => props.theme.text.datacard.title};
    font-size: 16px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 5fr;

  grid-template-rows: repeat(auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  overflow-x: auto;
  padding-left: 0 40px;

  .grid-element {
    background-color: red;
    position: relative;
    border-radius: 8px;
    padding: 0px 0;
    width: 184px;
  }
`;

export const FormButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 0px;
`;

export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin-top: ${spaces[3]};
  color: ${(props) => props.theme.text.message.error};
  text-align: center;
`;

export const Message = styled.p`
  color: ${(props) => props.theme.text.default};
  ${fontTypes.paragraph1}
`;

export const MessageBold = styled.p`
  color: ${(props) => props.theme.text.default};
  ${fontTypes.paragraph2}
`;

export const TitleMessage = styled.p`
  margin-top: 20px;
  color: ${(props) => props.theme.text.default};
  ${fontTypes.title2}
`;

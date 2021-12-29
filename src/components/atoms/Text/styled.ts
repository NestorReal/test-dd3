import styled from 'styled-components';
import fontTypes from '../../../config/font';
import { ITextProps } from '.';

const StyledText = styled.div<ITextProps>`
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  ${(props) => fontTypes[props.typography]};
`;

export default StyledText;

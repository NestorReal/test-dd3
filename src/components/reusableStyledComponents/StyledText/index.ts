import styled from 'styled-components';
import fontTypes from '../../../config/font';

interface StyledTextProps {
  /**
   * A string to define typography
   */
  typography:
    | 'display'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'caps1Bold'
    | 'caps1Regular'
    | 'caps2Bold'
    | 'caps2Regular'
    | 'caps3Bold'
    | 'caps3Regular'
    | 'paragraph1'
    | 'paragraph2'
    | 'paragraph3';
  /**
   * Should the text appears uppercased?
   */
  uppercase?: boolean;
}

const StyledText = styled.div<StyledTextProps>`
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  ${(props) => fontTypes[props.typography]};
`;

export default StyledText;

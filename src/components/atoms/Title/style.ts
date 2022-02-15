import styled from 'styled-components';
import fontTypes from '../../../config/font';

interface TitleProps {
  typography: 'paragraph1' | 'caps1Regular';
  uppercase?: boolean;
}

const TitleStyle = styled.div<TitleProps>`
  color: ${(props) =>
    props.typography === 'caps1Regular'
      ? props.theme.text.section.main
      : props.theme.text.section.title};
  ${(props) => fontTypes[`${props.typography}`]}
  text-transform: ${(props) => props.uppercase && 'uppercase'};
`;

export default TitleStyle;

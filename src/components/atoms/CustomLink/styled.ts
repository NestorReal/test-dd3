import styled from 'styled-components';
import fontTypes from '../../../config/font';

const StyledLink = styled.a`
  color: ${(props) => props.theme.text.datacard.title};
  ${fontTypes.paragraph2}
  &:hover {
    opacity: 0.8;
  }
`;

export default StyledLink;

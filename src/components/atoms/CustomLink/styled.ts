import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fontTypes from '../../../config/font';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text.datacard.title};
  ${fontTypes.paragraph2}
  &:hover {
    opacity: 0.8;
  }
`;

export default StyledLink;

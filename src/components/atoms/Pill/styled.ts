import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';

const StyledPill = styled.div`
  background: ${(props) => props.theme.background.pills};
  width: fit-content;
  padding: ${space[2]};
  border-radius: 8px;
  text-align: center;
  ${fontTypes.caps3Regular}
`;

export default StyledPill;

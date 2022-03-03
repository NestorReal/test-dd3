import styled from 'styled-components';
import space from '../../../config/spacing';

const CardContainer = styled.div`
  width: calc(100% / 3);
  &:not(:first-child) {
    margin-left: ${space[4]};
  }
`;

export default CardContainer;

import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';

export const StyledFilterContainer = styled.div`
  background: ${(props) => props.theme.background.filters};
  border-radius: 8px;
`;

export const StyledContent = styled.div`
  padding: ${space[5]} ${space[7]};
`;

export const StyledTitle = styled.div`
  color: ${(props) => props.theme.text.filters.title};
  text-transform: uppercase;
  margin-bottom: ${space[3]};
  ${fontTypes.caps1Regular};
  display: flex;
  justify-content: space-between;
`;

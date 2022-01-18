import styled from 'styled-components';
import space from '../../../config/spacing';
import fontTypes from '../../../config/font';

export const UserName = styled.div`
  color: ${(props) => props.theme.text.topmenu.main};
  margin-right: ${space[4]};
  ${fontTypes.paragraph2}
`;

export const MenuContainer = styled.div`
  position: relative;
`;

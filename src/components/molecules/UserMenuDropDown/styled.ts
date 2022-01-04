import styled from 'styled-components';
import space from '../../../config/spacing';
import StyledText from '../../reusableStyledComponents/StyledText';

export const UserName = styled(StyledText)`
  color: ${(props) => props.theme.text.topmenu.main};
  margin-right: ${space[4]};
`;

export const MenuContainer = styled.div`
  position: relative;
`;

import styled from 'styled-components';
import StyledText from '../../reusableStyledComponents/StyledText';
import Container from '../../reusableStyledComponents/Container';
import spaces from '../../../config/spacing';

export const MenuStyledContainer = styled(Container)`
  background: ${(props) => props.theme.background.aside.main};
  height: 100%;

  &:last-child {
    padding-bottom: ${spaces[4]};
  }
`;

export const MenuTitle = styled(StyledText)`
  color: ${(props) => props.theme.text.aside.main};
`;

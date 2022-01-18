import styled from 'styled-components';
import Container from '../../reusableStyledComponents/Container';
import spaces from '../../../config/spacing';
import fontTypes from '../../../config/font';

export const MenuStyledContainer = styled(Container)`
  background: ${(props) => props.theme.background.aside.main};
  height: 100%;

  &:last-child {
    padding-bottom: ${spaces[4]};
  }
`;

export const MenuTitle = styled.div`
  color: ${(props) => props.theme.text.aside.main};
  text-transform: uppercase;
  ${fontTypes.caps2Regular}
`;

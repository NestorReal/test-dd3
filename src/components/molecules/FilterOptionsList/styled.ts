import styled from 'styled-components';
import fontTypes from '../../../config/font';
import space from '../../../config/spacing';
import Container from '../../reusableStyledComponents/Container';

export const ListTitle = styled.div`
  color: ${(props) => props.theme.text.section.main};
  text-transform: uppercase;
  ${fontTypes.caps2Bold}
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borders.usermenu};
  padding-top: ${space[4]};
  padding-bottom: ${space[3]};
  padding-left: ${space[3]};

  &:hover {
    background: ${(props) => props.theme.background.aside.secondary};
  }
`;

export const ListContainer = styled(Container)``;

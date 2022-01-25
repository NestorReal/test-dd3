import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import spaces from '../../../config/spacing';
import fontTypes from '../../../config/font';

export const ItemLink = styled(NavLink)`
  padding: ${spaces[4]};
  border-radius: 8px;
  text-decoration: none;
  display: block;
  ${fontTypes.paragraph2}

  color: ${(props) => props.theme.text.aside.main};
  background: ${(props) => props.theme.background.aside.main};

  &[aria-current] {
    color: ${(props) => props.theme.text.aside.secondary};
    background: ${(props) => props.theme.background.aside.selected};
  }

  &:hover {
    color: ${(props) => props.theme.text.aside.secondary};
    background: ${(props) => props.theme.background.aside.secondary};
    opacity: 0.7;
    &[aria-current] {
      background: ${(props) => props.theme.background.aside.selected};
      opacity: 1;
    }
  }
`;

export default ItemLink;

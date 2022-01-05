import styled from 'styled-components';
import StyledText from '../../reusableStyledComponents/StyledText';
import spaces from '../../../config/spacing';

interface IItemProps {
  selected: boolean;
}

const Item = styled(StyledText)<IItemProps>`
cursor: pointer;
border-radius: 8px;
color: ${(props) => (props.selected ? props.theme.text.aside.secondary : props.theme.text.aside.main)};
background ${(props) => (props.selected ? props.theme.background.aside.selected : props.theme.background.aside.main)};
padding: ${spaces[4]};

&:hover {
    color: ${(props) => props.theme.text.aside.secondary};
    background: ${(props) => (props.selected
    ? props.theme.background.aside.selected
    : props.theme.background.aside.secondary)};
    opacity: ${(props) => (props.selected ? '1' : '0.7')}
}
`;

export default Item;

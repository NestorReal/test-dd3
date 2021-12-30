import styled from 'styled-components';
import space from '../../../config/spacing';

type Spaces = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface IFlexContainerProps {
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'left'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start';
  paddingTop?: Spaces;
  paddingRight?: Spaces;
  paddingBottom?: Spaces;
  paddingLeft?: Spaces;
  cursor?: 'pointer';
}

const FlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  padding-top: ${(props) => (props.paddingTop ? space[props.paddingTop] : '')};
  padding-right: ${(props) => (props.paddingRight ? space[props.paddingRight] : '')};
  padding-bottom: ${(props) => (props.paddingBottom ? space[props.paddingBottom] : '')};
  padding-left: ${(props) => (props.paddingLeft ? space[props.paddingLeft] : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;

export default FlexContainer;

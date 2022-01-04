import styled from 'styled-components';
import space from '../../../config/spacing';

type Spaces = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface IContainerProps {
  display?: 'flex' | 'block';
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
  padding?: Spaces;
  cursor?: 'pointer';
}

const Container = styled.div<IContainerProps>`
  display: ${(props) => (props.display ? props.display : '')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : '')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  padding-top: ${(props) => (props.paddingTop ? space[props.paddingTop] : '')};
  padding-right: ${(props) => (props.paddingRight ? space[props.paddingRight] : '')};
  padding-bottom: ${(props) => (props.paddingBottom ? space[props.paddingBottom] : '')};
  padding-left: ${(props) => (props.paddingLeft ? space[props.paddingLeft] : '')};
  padding: ${(props) => (props.padding ? space[props.padding] : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;

export default Container;

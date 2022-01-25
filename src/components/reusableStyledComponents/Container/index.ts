import styled from 'styled-components';
import space from '../../../config/spacing';

type Spaces = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface IContainerProps {
  display?: 'flex' | 'block' | 'none';
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
  marginTop?: Spaces;
  marginRight?: Spaces;
  marginBottom?: Spaces;
  marginLeft?: Spaces;
  cursor?: 'pointer';
  maxWidth?: string;
  width?: string;
  position?: 'absolute' | 'relative' | 'static';
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
  margin-top: ${(props) => (props.marginTop ? space[props.marginTop] : '')};
  margin-right: ${(props) => (props.marginRight ? space[props.marginRight] : '')};
  margin-bottom: ${(props) => (props.marginBottom ? space[props.marginBottom] : '')};
  margin-left: ${(props) => (props.marginLeft ? space[props.marginLeft] : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
  width: ${(props) => (props.width ? props.width : '')};
  position: ${(props) => (props.position ? props.position : 'static')};
`;

export default Container;

import styled, { keyframes } from 'styled-components';

export interface IStyledSketon {
  width: number | string;
  height: number;
  borderRadius: number;
}

const blink = keyframes`
 from {opacity: 1.0;}
  to {opacity: 0.3;}
`;

const StyledSketon = styled.div<IStyledSketon>`
  background: ${(props) => props.theme.background.skeleton};
  width: ${(props) => {
    if (typeof props.width === 'number') return `${props.width}px`;
    if (typeof props.width === 'string') return props.width;
    return '';
  }};

  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};

  animation: ${blink} 1s linear infinite;
`;

export default StyledSketon;

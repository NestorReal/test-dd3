import React from 'react';
import StyledPill from './styled';

export interface IPillProps {
  /**
   * Represents the text inside the pill
   */
  name: string;
}

const Pill = ({ name }: IPillProps) => <StyledPill>{name}</StyledPill>;

export default Pill;

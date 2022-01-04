import React from 'react';
import StyledLogo from './styled';

export interface ILogoProps {
  /**
   * A url string to point to an image file
   */
  url: string;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ url }: ILogoProps) => (
  <StyledLogo src={url} alt="logo" />
);

export default Logo;

import React from 'react';
import StyledLink from './styled';

interface ICustomLinkProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink = ({ children, to }: ICustomLinkProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default CustomLink;

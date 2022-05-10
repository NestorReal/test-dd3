import React from 'react';
import AvatarStyled from './styled';

export interface IAvatarProps {
  /**
   * What is the name of the item in the menu?
   */
  name: string;
}

const Avatar = ({ name}: IAvatarProps) => <AvatarStyled>{name}</AvatarStyled>;

export default Avatar;

import React, { ReactNode } from 'react';
import ContainerGroupButton from './styled';

export interface IGroupButton {
  /**
   * add the necessary buttons
   */
  children?: ReactNode;
  /**
   * modify width
   */
  width: number;
}

const GroupButton = ({ children, width }: IGroupButton) => (
  <ContainerGroupButton width={width}>
    {children}
  </ContainerGroupButton>
);

export default GroupButton;

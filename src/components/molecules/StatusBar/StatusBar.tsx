import React from 'react';
import { StatusBarStyled, BarButtonContainer, BartextContainer } from './styled';
import Button from '../../atoms/Button';
import Edit from '../../icons/Edit';

export interface IStatusBar {
  /**
   * texto to render inside status bar
   */
  text: string;
  /**
   * a function to execute when edit icon its clicked
   */
  onClick: Function;
  /**
   * show or hide component
   */
  hidden: boolean;
}

const StatusBar = ({ text, onClick, hidden }: IStatusBar) => (
  <StatusBarStyled hidden={hidden}>
    <BartextContainer>{text}</BartextContainer>
    <BarButtonContainer>
      <Button onClick={onClick} primary>
        <Edit />
      </Button>
    </BarButtonContainer>
  </StatusBarStyled>
);

export default StatusBar;

import React, { useState, ReactNode } from 'react';
import StyledButton from './styled';
import LoaderSpinner from '../LoaderSpinner';

export interface IButton {
  /**
   * add corresponding button content
   */
  children: ReactNode;
  /**
   * change the button color
   */
  primary?: boolean;
  /**
   * if you need to have an async function
   */
  async?: boolean;
  /**
   * button function
   */
  onClick: Function;
  /**
   * disable button
   */
   disable?: boolean;
   /**
    * height button
    */
   height?: number;
   /**
    * width button
    */
   width?: number;
   /**
    * border radius button
    */
   borderRadius?: number;
   /**
    * type of button you need to use
    */
   type: 'button' | 'reset' | 'submit'
}

const Button = ({
  children,
  primary,
  onClick,
  async,
  disable,
  height = 28,
  width = 60,
  borderRadius,
  type = 'button',
}: IButton) => {
  const [state, setState] = useState({
    loader: false,
    disable,
  });
  const newHeight = height - 5;
  return (
    <StyledButton
      type={type}
      primary={primary}
      disabled={state.disable}
      height={height}
      width={width}
      borderRadius={borderRadius}
      onClick={async ? async () => {
        setState({ ...state, loader: true, disable: true });
        await onClick();
        setState({ ...state, loader: false, disable: false });
      } : () => {
        onClick();
      }}
    >
      {state.loader
        ? <LoaderSpinner primary={!primary} height={newHeight} width={newHeight} />
        : children}
    </StyledButton>
  );
};

export default Button;

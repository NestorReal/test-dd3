import React, { useState, ReactNode } from 'react';
import ContainerButton from './styled';
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
}

const Button = ({
  children, primary, onClick, async,
}: IButton) => {
  const [loader, setLoader] = useState(false);

  return (
    <ContainerButton
      type="button"
      primary={primary}
      onClick={async ? async () => {
        setLoader(true);
        await onClick();
        setLoader(false);
      } : () => {
        onClick();
      }}
    >
      {loader
        ? <LoaderSpinner height={25} width={25} />
        : children}
    </ContainerButton>
  );
};

export default Button;

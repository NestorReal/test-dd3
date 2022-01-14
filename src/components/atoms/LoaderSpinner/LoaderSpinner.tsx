import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';

export interface ILoaderSpinnerProps {
  /**
   * A number to change width in px units. Its recommended width and height have same value.
   */
  width?: number;
  /**
   * A number to change height in px units.Its recommended width and height have same value.
   */
  height?: number;
  /**
   * primary or secondary color
   */
  primary?: boolean;
}

const LoaderSpinner = ({ width = 80, height = 80, primary = true }: ILoaderSpinnerProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Loader
      type="Puff"
      width={width}
      height={height}
      color={primary
        ? themeContext.background.button.primary : themeContext.background.button.secondary}
    />
  );
};

export default LoaderSpinner;

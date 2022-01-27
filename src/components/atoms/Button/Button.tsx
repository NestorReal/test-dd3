import React, { useState, ReactNode, useRef, useEffect } from 'react';
import StyledButton from './styled';
import LoaderSpinner from '../LoaderSpinner';
import { buttonTypographies } from '../../../types/typography';

export interface IButton {
  /**
   * add corresponding button content
   */
  children: ReactNode;
  /**
   * Should be true for primary colors, false for secondary.
   */
  primary?: boolean;
  /**
   * Should be true if you want button shows a loader. Used for async functions.
   */
  async?: boolean;
  /**
   * A function to execute on button Click, could be sync or async.
   */
  onClick: Function;
  /**
   * If true button shows as disabled
   */
  disabled?: boolean;
  /**
   * A value in px to determine border radius
   */
  borderRadius?: number;
  /**
   * Type of button you need to use, default as button
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * A possible value taken from the DesignSystem values.
   */
  typography?: buttonTypographies;
}

const Button = ({
  children,
  primary,
  onClick,
  async,
  disabled,
  borderRadius,
  typography = 'paragraph2',
  type = 'button',
}: IButton) => {
  const [state, setState] = useState({
    loader: false,
    disabled,
  });
  const [loaderHeight, setLoaderHeight] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      setLoaderHeight(ref.current.clientHeight - 15);
    }
  }, [ref]);

  return (
    <StyledButton
      ref={ref}
      type={type}
      primary={primary}
      disabled={disabled || state.disabled}
      borderRadius={borderRadius}
      typography={typography}
      onClick={
        async
          ? async () => {
              setState({ ...state, loader: true, disabled: true });
              await onClick();
              setState({ ...state, loader: false, disabled: false });
            }
          : () => {
              onClick();
            }
      }
    >
      {state.loader ? (
        <LoaderSpinner primary={!primary} height={loaderHeight} width={loaderHeight} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;

import React, { useState, ReactNode, useRef, useEffect } from 'react';
import StyledFormButton from './styled';
import LoaderSpinner from '../LoaderSpinner';
import { buttonTypographies } from '../../../types/typography';

export interface IFormButtonProps {
  /**
   * add corresponding button content
   */
  children: ReactNode;
  /**
   * Should be true for primary colors, false for secondary.
   */
  primary?: boolean;
  /**
   * A function to execute on button Click, could be sync or async.
   */
  onClick: Function;
  /**
   * If true button shows as disabled
   */
  disabled?: boolean;
  /**
   * If true button shows with a loader
   */
  loading?: boolean;
  /**
   * A value in px to determine border radius
   */
  borderRadius?: number;
  /**
   * Type of button you need to use
   */
  type: 'button' | 'reset' | 'submit';
  /**
   * A possible value taken from the DesignSystem values.
   */
  typography?: buttonTypographies;
}

const FormButton = ({
  children,
  primary,
  onClick,
  disabled,
  loading,
  borderRadius,
  typography = 'paragraph2',
  type = 'button',
}: IFormButtonProps) => {
  const [buttonState, setButtonState] = useState({
    isloading: false,
    disabled,
  });
  const [loaderHeight, setLoaderHeight] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      setLoaderHeight(ref.current.clientHeight - 15);
    }
  }, [ref]);

  useEffect(() => {
    if (loading) {
      setButtonState({ isloading: true, disabled: true });
    } else {
      setButtonState({ isloading: false, disabled: false });
    }
  }, [disabled, loading]);

  return (
    <StyledFormButton
      ref={ref}
      type={type}
      primary={primary}
      disabled={disabled || buttonState.disabled}
      borderRadius={borderRadius}
      typography={typography}
      onClick={() => onClick()}
    >
      {buttonState.isloading ? (
        <LoaderSpinner primary={!primary} height={loaderHeight} width={loaderHeight} />
      ) : (
        children
      )}
    </StyledFormButton>
  );
};

export default FormButton;

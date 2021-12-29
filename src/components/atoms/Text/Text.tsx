import React from 'react';
import StyledText from './styled';

export interface ITextProps {
  /**
   * Recieves a ReactNode as children
   */
  children: React.ReactNode;
  /**
   * A string to define typography
   */
  typography:
    | 'display'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'caps1Bold'
    | 'caps1Regular'
    | 'caps2Bold'
    | 'caps2Regular'
    | 'caps3Bold'
    | 'caps3Regular'
    | 'paragraph1'
    | 'paragraph2'
    | 'paragraph3';
  /**
   * Should the text appears uppercased?
   */
  uppercase?: boolean;
}

const Text = (props: ITextProps) => {
  const { children, typography, uppercase = false } = props;

  return (
    <StyledText uppercase={uppercase} typography={typography}>
      {children}
    </StyledText>
  );
};

export default Text;

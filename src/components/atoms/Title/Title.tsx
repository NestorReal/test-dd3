import React from 'react';
import TitleStyle from './style';

export interface ITitle {
  /**
   * text title
   */
  text: string;
  /**
   * typography paragraph1 or caps1Regular
   */
  typography: 'paragraph1' | 'caps1Regular';
  /**
   * convert text to uppercase
   */
  uppercase?: boolean;
}

const Title = ({ text, typography, uppercase }: ITitle) => (
  <TitleStyle typography={typography} uppercase={uppercase}>
    {text}
  </TitleStyle>
);

export default Title;

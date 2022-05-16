import React from 'react';

export interface IRectangleProps {
  /**
   * A function to execute when icon is clicked
   */
  onClick?: Function;
}

const Rectangle = ({ onClick }: IRectangleProps) => (
  <svg
    width="31"
    height="24"
    viewBox="0 0 31 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => onClick && onClick()}
  >
    <rect x="0.935486" width="29.6129" height="24" rx="2" fill="black" fillOpacity="0.49" />
  </svg>
);
export default Rectangle;

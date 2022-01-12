import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ArrowDownRight = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="10px"
      height="10px"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1}
      fill={themeContext.icons.arrowdownright}
      stroke={themeContext.icons.arrowdownright}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down-right"
    >
      <path x1={7} y1={7} x2={17} y2={17} d="M3.5 3.5L8.5 8.5" />
      <path points="17 7 17 17 7 17" d="M8.5 3.5L8.5 8.5L3.5 8.5" />
    </svg>
  );
};

export default ArrowDownRight;

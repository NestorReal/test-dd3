import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ArrowUpRight = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="10px"
      height="10px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={themeContext.icons.arrowupright}
      stroke={themeContext.icons.arrowupright}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up-right"
    >
      <line x1={7} y1={17} x2={17} y2={7} />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

export default ArrowUpRight;

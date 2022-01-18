import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export interface IDropDownprops {
  /**
   * A function to execute when icon is clicked
   */
  onClick: Function;
}

const DropDown = (props: IDropDownprops) => {
  const themeContext = useContext(ThemeContext);
  const { onClick } = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="10px"
      height="6px"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        onClick();
      }}
    >
      <g transform="matrix(1 0 0 1 -99 -13 )">
        <path
          d="M 1.38775670835299 0  C 0.148286836797394 0  -0.464484791624069 1.4109961810459  0.412892765365546 2.23407724771993  C 0.412892765365546 2.23407724771993  4.019889462331 5.61785519123272  4.019889462331 5.61785519123272  C 4.56302793417997 6.12738155100766  5.44040565718793 6.12738155100766  5.98354412903689 5.61785519123272  C 5.98354412903689 5.61785519123272  9.59054032794732 2.23407724771993  9.59054032794732 2.23407724771993  C 10.4679178849369 1.4109961810459  9.84121955879364 0  8.60174968723804 0  C 8.60174968723804 0  1.38775670835299 0  1.38775670835299 0  Z "
          fillRule="nonzero"
          fill={themeContext.icons.dropdown}
          stroke="none"
          transform="matrix(1 0 0 1 99 13 )"
        />
      </g>
    </svg>
  );
};

export default DropDown;

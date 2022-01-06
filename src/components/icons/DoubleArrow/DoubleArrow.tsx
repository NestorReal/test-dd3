import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export interface IDoubleArrowProps {
  /**
   * A number to express width in px units
   */
  width?: number;
  /**
   * A number to express height in px units
   */
  height?: number;
}

const DoubleArrow = ({ width = 8, height = 14 }: IDoubleArrowProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`${width}px`}
      height={`${height}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1 0 0 1 -607 -293 )">
        <path
          d="M 3.21316480636597 0.331584856989362  C 3.64767575263977 -0.110528265447284  4.3495774269104 -0.110528265447284  4.78408861160278 0.331584856989362  C 4.78408861160278 0.331584856989362  7.66968584060669 3.26766982498099  7.66968584060669 3.26766982498099  C 8.3715877532959 3.98185270584579  7.88137054443359 5.20616604262113  6.88979482650757 5.20616604262113  C 6.88979482650757 5.20616604262113  1.11860024929047 5.20616604262113  1.11860024929047 5.20616604262113  C 0.127024352550507 5.20616604262113  -0.374334245920181 3.98185270584579  0.327567785978317 3.26766982498099  C 0.327567785978317 3.26766982498099  3.21316480636597 0.331584856989362  3.21316480636597 0.331584856989362  Z M 4.78683519363403 13.6684153249532  C 4.35232448577881 14.1105288719224  3.6504225730896 14.1105288719224  3.2159116268158 13.6684153249532  C 3.2159116268158 13.6684153249532  0.330314218997955 10.7323306601991  0.330314218997955 10.7323306601991  C -0.371587812900543 10.0181475367442  0.118629395961761 8.79383444255894  1.11020529270172 8.79383444255894  C 1.11020529270172 8.79383444255894  6.88139963150024 8.79383444255894  6.88139963150024 8.79383444255894  C 7.87297582626343 8.79383444255894  8.37433433532715 10.0181475367442  7.67243242263794 10.7323306601991  C 7.67243242263794 10.7323306601991  4.78683519363403 13.6684153249532  4.78683519363403 13.6684153249532  Z "
          fillRule="nonzero"
          fill={themeContext.icons.dropdown}
          stroke="none"
          transform="matrix(1 0 0 1 607 293 )"
        />
      </g>
    </svg>
  );
};

export default DoubleArrow;

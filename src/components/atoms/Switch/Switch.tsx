import React from 'react';
import StyledSwitch from './style';

export interface ISwitch {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labels?: string[];
}

const Switch = ({ onChange, labels }: ISwitch) => (
  <StyledSwitch>
    <label htmlFor="check">
      {labels ? labels[0] : ''}
    </label>
    <label htmlFor="check" className="switch">
      <input type="checkbox" onChange={onChange} id='check' />
      <span className="slider round" />
    </label>
    <label htmlFor="check">
      {labels ? labels[1] : ''}
    </label>
  </StyledSwitch>
);

export default Switch;

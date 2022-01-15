import React from 'react';
import { RangeOption } from '../../../types/filters';
import { RangeContainer, LabelContainer, SideLabelContainer } from './styled';

interface IDateDisplayProps {
  range: RangeOption;
}

const DateDisplay = ({ range }: IDateDisplayProps) => (
  <RangeContainer>
    <LabelContainer>{range.label}</LabelContainer>
    <SideLabelContainer>{range.sideLabel}</SideLabelContainer>
  </RangeContainer>
);

export default DateDisplay;

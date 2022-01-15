import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DateDisplay from '../../atoms/DateDisplay';
import { RangeOption } from '../../../types/filters';
import { ListTitleContainer, DateDisplayListContainer, DateDisplayOptionContainer } from './styled';

interface IDateDisplayListProps {
  options: RangeOption[];
  listTitle?: string;
  onClick: Function;
}

const DateDisplayList = ({ options, listTitle, onClick }: IDateDisplayListProps) => (
  <DateDisplayListContainer>
    {listTitle && <ListTitleContainer>{listTitle}</ListTitleContainer>}
    {options.map((option) => (
      <DateDisplayOptionContainer key={uuidv4()} onClick={() => onClick(option)}>
        <DateDisplay range={option} />
      </DateDisplayOptionContainer>
    ))}
  </DateDisplayListContainer>
);

export default DateDisplayList;

import React, { useState } from 'react';
import DateDisplay from '../../atoms/DateDisplay';
import DateDisplayList from '../DateDisplayList';
import SelectorDropdown from '../../atoms/SelectorDropdown';
import CustomDateDisplayList from '../CustomDateDisplayList';
import { RangeOption } from '../../../types/filters';
import { conformRanges, TIME_RANGES_ID } from '../../../helpers/rangeDateHelpers';
import { DateDisplayContainer, CalendarContainer, DropContainer } from './styled';
import useDropdownProps from '../../../hooks/useDropdownProps';
import useDatePicker from '../../../hooks/useDatePicker';
import useRangePicker from '../../../hooks/useRangeDatePicker';

interface IRangeDateSelectorProps {
  onClickDropdownItem: Function;
  selectorTitle: string;
  onClickFilterCalendar: Function;
  onClickFilterCalendarRange: Function;
  onClickExactDayOption: Function;
  onClickRangeOption: Function;
}

const RangeDateSelector = ({
  selectorTitle,
  onClickDropdownItem,
  onClickFilterCalendar,
  onClickFilterCalendarRange,
  onClickExactDayOption,
  onClickRangeOption,
}: IRangeDateSelectorProps) => {
  const defaultOption = conformRanges.preformed[TIME_RANGES_ID.currentMonth];
  const [oneDate, rangeOfDates] = conformRanges.custom;
  const [selectedOption, setSelectedOption] = useState({ ...defaultOption });
  const { open, closeDropdown, toggleOpen } = useDropdownProps();
  const { lowDate, upDate, openCalendar, closeCalendar, Calendar } = useDatePicker();
  const {
    lowDate: lowRangeDate,
    upDate: upRangeDate,
    openCalendarRange,
    closeCalendarRange,
    CalendarRange,
  } = useRangePicker();

  const onClickItem = (option: RangeOption) => {
    closeDropdown();
    setSelectedOption(option);
    if (onClickDropdownItem) {
      onClickDropdownItem(option);
    }
  };

  return (
    <SelectorDropdown
      open={open}
      close={closeDropdown}
      toggleOpen={toggleOpen}
      selectorTitle={selectorTitle}
      selectionContent={
        <DateDisplayContainer>
          <DateDisplay range={selectedOption} />
        </DateDisplayContainer>
      }
      dropDownContent={
        <DropContainer>
          <DateDisplayList options={conformRanges.preformed} onClick={onClickItem} />
          <CustomDateDisplayList
            onClickExactDayOption={() => onClickExactDayOption({ ...oneDate, lowDate, upDate })}
            onClickRangeOption={() =>
              onClickRangeOption({
                ...rangeOfDates,
                lowDate: lowRangeDate,
                upDate: upRangeDate,
              })
            }
            openCalendar={openCalendar}
            openCalendarRange={openCalendarRange}
            closeCalendarRange={closeCalendarRange}
            closeCalendar={closeCalendar}
            customOptions={conformRanges.custom}
            onClickNormalItem={onClickItem}
          />
          <CalendarContainer>
            <Calendar
              onClickFilter={(date: any) => {
                onClickFilterCalendar({ ...oneDate, ...date });
              }}
              closeDropdown={closeDropdown}
              setSelectedOption={setSelectedOption}
              optionData={oneDate}
            />
          </CalendarContainer>

          <CalendarContainer>
            <CalendarRange
              onClickFilter={(date: any) => {
                onClickFilterCalendarRange({ ...rangeOfDates, ...date });
              }}
              closeDropdown={closeDropdown}
              setSelectedOption={setSelectedOption}
              optionData={rangeOfDates}
            />
          </CalendarContainer>
        </DropContainer>
      }
    />
  );
};

export default RangeDateSelector;

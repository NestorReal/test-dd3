import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../config/app/hooks';
import { initialState } from '../../../features/filtersSlice';
import DateDisplay from '../../atoms/DateDisplay';
import DateDisplayList from '../DateDisplayList';
import SelectorDropdown from '../../atoms/SelectorDropdown';
import CustomDateDisplayList from '../CustomDateDisplayList';
import { RangeOption } from '../../../types/filters';
import { conformRanges } from '../../../helpers/rangeDateHelpers';
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
  const defaultOption = useAppSelector((state) => state.filters.time);
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
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onClickItem = (option: RangeOption) => {
    closeDropdown();
    setSelectedOption(option);
    if (onClickDropdownItem) {
      dispatch(onClickDropdownItem(option));
    }
  };

  useEffect(() => {
    setSelectedOption(initialState.time);
    dispatch(onClickDropdownItem(initialState.time));
  }, [location.pathname]);

  return (
    <div>
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
                  dispatch(onClickFilterCalendar({ ...oneDate, ...date }));
                }}
                closeDropdown={closeDropdown}
                setSelectedOption={setSelectedOption}
                optionData={oneDate}
              />
            </CalendarContainer>

            <CalendarContainer>
              <CalendarRange
                onClickFilter={(date: any) => {
                  dispatch(onClickFilterCalendarRange({ ...rangeOfDates, ...date }));
                }}
                closeDropdown={closeDropdown}
                setSelectedOption={setSelectedOption}
                optionData={rangeOfDates}
              />
            </CalendarContainer>
          </DropContainer>
        }
      />
    </div>
  );
};

export default RangeDateSelector;

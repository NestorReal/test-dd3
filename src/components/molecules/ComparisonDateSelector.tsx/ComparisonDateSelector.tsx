import React, { useEffect, useState } from 'react';
import DateDisplay from '../../atoms/DateDisplay';
import DateDisplayList from '../DateDisplayList';
import CustomDateDisplayList from '../CustomDateDisplayList';
import SelectorDropdown from '../../atoms/SelectorDropdown';
import { CalendarContainer, DateDisplayContainer } from './styled';
import { conformComparations } from '../../../helpers/compareTimeHelpers';
import useDropdownProps from '../../../hooks/useDropdownProps';
import { RangeOption } from '../../../types/filters';
import useDatePicker from '../../../hooks/useDatePicker';
import useRangePicker from '../../../hooks/useRangeDatePicker';
import { CUSTOM_RANGES_ID } from '../../../helpers/rangeDateHelpers';

interface IComparisonDateSelectorProps {
  optionId: number;
  selectorTitle: string;
  onClickDropdownItem: Function;
  onClickExactDayOption: Function;
  onClickRangeOption: Function;
  onClickFilterCalendar: Function;
  onClickFilterCalendarRange: Function;
}

const ComparisonDateSelector = ({
  optionId,
  selectorTitle,
  onClickDropdownItem,
  onClickExactDayOption,
  onClickRangeOption,
  onClickFilterCalendar,
  onClickFilterCalendarRange,
}: IComparisonDateSelectorProps) => {
  const compareOptions = conformComparations[optionId];
  const [defaultOption] = compareOptions;
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

  const [exactDayOption] = conformComparations[CUSTOM_RANGES_ID.exactDay];
  const [rangeOption] = conformComparations[CUSTOM_RANGES_ID.range];

  const onClickItem = (option: RangeOption) => {
    closeDropdown();
    setSelectedOption(option);
    if (onClickDropdownItem) {
      onClickDropdownItem(option);
    }
  };

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [compareOptions]);

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
        <>
          {optionId >= 0 && optionId <= 8 && (
            <DateDisplayList options={compareOptions} onClick={onClickItem} />
          )}
          {optionId >= 9 && optionId <= 10 && (
            <>
              <CustomDateDisplayList
                onClickNormalItem={onClickItem}
                // eslint-disable-next-line max-len
                onClickExactDayOption={() =>
                  onClickExactDayOption({ ...exactDayOption, lowDate, upDate })
                }
                onClickRangeOption={() =>
                  onClickRangeOption({
                    ...rangeOption,
                    lowDate: lowRangeDate,
                    upDate: upRangeDate,
                  })
                }
                openCalendarRange={openCalendarRange}
                openCalendar={openCalendar}
                closeCalendarRange={closeCalendarRange}
                closeCalendar={closeCalendar}
                customOptions={compareOptions}
              />

              <CalendarContainer>
                <Calendar
                  onClickFilter={(date: any) => {
                    onClickFilterCalendar({ ...exactDayOption, ...date });
                  }}
                  closeDropdown={closeDropdown}
                  setSelectedOption={setSelectedOption}
                  optionData={exactDayOption}
                />
              </CalendarContainer>

              <CalendarContainer>
                <CalendarRange
                  onClickFilter={(date: any) => {
                    onClickFilterCalendarRange({ ...rangeOption, ...date });
                  }}
                  closeDropdown={closeDropdown}
                  setSelectedOption={setSelectedOption}
                  optionData={rangeOption}
                />
              </CalendarContainer>
            </>
          )}
        </>
      }
    />
  );
};

export default ComparisonDateSelector;

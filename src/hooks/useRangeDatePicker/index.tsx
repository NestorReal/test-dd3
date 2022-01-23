import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import {
  subYears, startOfDay, endOfDay, isThisYear,
} from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../helpers/formatDateHelpers';
import Button from '../../components/atoms/Button';
import {
  OverallCalendarRangeContainer,
  CalendarRangeContainer,
  ButtonRangeContainer,
} from './styled';
import useCloseOnClickOutside from '../useCloseOnClickOutside';
import 'react-datepicker/dist/react-datepicker.css';

export interface ICalendarProps {
  onClickFilter?: Function;
  closeDropdown: Function;
  setSelectedOption: Function;
  optionData: any;
}

const useRangeDatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lowDate, setLowDate] = useState(new Date());
  const [upDate, setUpDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setLowDate(start);
    setUpDate(end);
  };

  const openCalendarRange = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeCalendarRange = () => {
    setIsOpen(false);
  };

  const getSideLabel = () => {
    const start = startOfDay(lowDate);
    const end = upDate ? endOfDay(upDate) : lowDate;
    const formatFn = isThisYear(start) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
    return `${formatFn(start)} - ${formatFn(end)}`;
  };

  const formatedLowDate = formatToISOWithoutTimeZone(startOfDay(lowDate));
  const formatedUpDate = upDate && formatToISOWithoutTimeZone(endOfDay(upDate));
  const sideLabel = getSideLabel();

  const CalendarRange = ({
    onClickFilter,
    closeDropdown,
    setSelectedOption,
    optionData,
  }: ICalendarProps) => {
    const { ref } = useCloseOnClickOutside(isOpen, closeCalendarRange);
    if (isOpen) {
      return (
        <OverallCalendarRangeContainer ref={ref}>
          <CalendarRangeContainer>
            <DatePicker
              selected={lowDate}
              onChange={onChange}
              //   onClickOutside={closeCalendar}
              locale={es}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              minDate={subYears(new Date(), 2)}
              maxDate={new Date()}
              dropdownMode="select"
              startDate={lowDate}
              endDate={upDate}
              selectsRange
              closeOnScroll
              inline
            />
            <ButtonRangeContainer>
              <Button
                primary
                onClick={() => {
                  if (onClickFilter) {
                    onClickFilter({
                      lowDate: formatedLowDate,
                      upDate: formatedUpDate,
                    });
                  }
                  setSelectedOption({
                    ...optionData,
                    sideLabel,
                    lowDate: formatedLowDate,
                    upDate: formatedUpDate,
                  });
                  closeDropdown();
                  closeCalendarRange();
                }}
                disabled={!lowDate || !upDate}
              >
                Filtrar
              </Button>
            </ButtonRangeContainer>
          </CalendarRangeContainer>
        </OverallCalendarRangeContainer>
      );
    }
    return null;
  };

  return {
    lowDate: formatedLowDate,
    upDate: formatedUpDate,
    sideLabel,
    openCalendarRange,
    closeCalendarRange,
    CalendarRange,
  };
};

export default useRangeDatePicker;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { subYears, startOfDay, endOfDay, isThisYear } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDayAndYear,
  formatToMonthAndDay,
} from '../../helpers/formatDateHelpers';
import Button from '../../components/atoms/Button';
import { OverallCalendarContainer, CalendarContainer, ButtonContainer } from './styled';
import useCloseOnClickOutside from '../useCloseOnClickOutside';
import 'react-datepicker/dist/react-datepicker.css';

export interface ICalendarProps {
  onClickFilter?: Function;
  closeDropdown: Function;
  setSelectedOption: Function;
  optionData: any;
}

const useDatePicker = () => {
  const [lowDate, setLowDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: any) => {
    setLowDate(e);
  };
  const openCalendar = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeCalendar = () => {
    setIsOpen(false);
  };

  const getSideLabel = () => {
    const start = startOfDay(lowDate);
    const formatFn = isThisYear(start) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
    return `${formatFn(start)}`;
  };

  const formatedLowDate = formatToISOWithoutTimeZone(startOfDay(lowDate));
  const formatedUpDate = formatToISOWithoutTimeZone(endOfDay(lowDate));
  const sideLabel = getSideLabel();

  const Calendar = ({
    onClickFilter,
    closeDropdown,
    setSelectedOption,
    optionData,
  }: ICalendarProps) => {
    const { ref } = useCloseOnClickOutside(isOpen, closeCalendar);
    if (isOpen) {
      return (
        <OverallCalendarContainer ref={ref}>
          <CalendarContainer>
            <DatePicker
              selected={lowDate}
              onChange={handleChange}
              //   onClickOutside={closeCalendar}
              locale={es}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              minDate={subYears(new Date(), 2)}
              maxDate={new Date()}
              dropdownMode="select"
              closeOnScroll
              inline
            />
            <ButtonContainer>
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
                  closeCalendar();
                }}
              >
                Filtrar
              </Button>
            </ButtonContainer>
          </CalendarContainer>
        </OverallCalendarContainer>
      );
    }
    return null;
  };

  return {
    lowDate: formatedLowDate,
    upDate: formatedUpDate,
    sideLabel,
    openCalendar,
    closeCalendar,
    Calendar,
    isOpen,
  };
};

export default useDatePicker;

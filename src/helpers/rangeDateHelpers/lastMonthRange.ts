import {
  startOfMonth, endOfMonth, subMonths, isThisYear,
} from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastMonthRange = () => {
  const todayMinusOneMonth = subMonths(new Date(), 1);
  const lowDate = startOfMonth(todayMinusOneMonth);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfMonth(todayMinusOneMonth);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(todayMinusOneMonth)
    ? formatToMonthAndDay
    : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: 'Mes Anterior',
  };
};

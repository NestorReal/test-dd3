import {
  startOfQuarter, endOfQuarter, subQuarters, isThisYear,
} from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastQuarterRange = () => {
  const todayMinusOneQuarter = subQuarters(new Date(), 1);
  const lowDate = startOfQuarter(todayMinusOneQuarter);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(todayMinusOneQuarter);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(todayMinusOneQuarter)
    ? formatToMonthAndDay
    : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: 'Q Anterior',
  };
};

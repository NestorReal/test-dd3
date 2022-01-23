import { startOfYear, endOfYear, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastYearRange = () => {
  const todayMinusOneYear = subYears(new Date(), 1);
  const lowDate = startOfYear(todayMinusOneYear);
  const formatedTOISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfYear(todayMinusOneYear);
  const formatedTOISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  return {
    lowDate: formatedTOISOLowDate,
    upDate: formatedTOISOUpDate,
    sideLabel,
    label: 'Año Anterior',
  };
};

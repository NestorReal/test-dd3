import { startOfQuarter, endOfToday } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const currentQuarterRange = () => {
  const lowDate = startOfQuarter(new Date());
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfToday();
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDay(lowDate)} - ${formatToMonthAndDay(upDate)}`;
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: 'Q Actual',
  };
};

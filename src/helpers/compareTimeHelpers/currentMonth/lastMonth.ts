import { startOfMonth, endOfMonth, subMonths, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastMonth = () => {
  const dayMonthAgo = subMonths(new Date(), 1);
  const lowDate = startOfMonth(dayMonthAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfMonth(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  const label = 'Mes Anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 3.0,
  };
};

import { startOfMonth, subMonths, isThisYear } from 'date-fns';
import { formatToMonthAndDay, formatToMonthAndDayAndYear } from '../../formatDateHelpers';

const changeDateFormat = (dates: string[]): string => {
  const dayMonthAgo = subMonths(new Date(), 1);
  const lowDate = startOfMonth(dayMonthAgo);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const [initialDate, finalDate] = dates;
  if (initialDate !== undefined && finalDate !== undefined) {
    return `${formatFn(new Date(initialDate))} - ${formatFn(new Date(finalDate))}`;
  }
  return '';
};

export default changeDateFormat;

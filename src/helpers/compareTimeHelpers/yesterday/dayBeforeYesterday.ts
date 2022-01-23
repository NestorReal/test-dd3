import { startOfDay, endOfDay, subDays } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const dayBeforeYesterday = () => {
  const beforeYesterday = subDays(new Date(), 2);
  const lowDate = startOfDay(beforeYesterday);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfDay(beforeYesterday);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDay(lowDate)}`;
  const label = 'Día anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 0.0,
  };
};

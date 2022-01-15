import { startOfMonth, endOfMonth, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const sameLastMonthLastYear = () => {
  const dayYearAgo = subYears(new Date(), 1);
  const lowDate = startOfMonth(dayYearAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfMonth(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = 'Mes Año Anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 4.1,
  };
};

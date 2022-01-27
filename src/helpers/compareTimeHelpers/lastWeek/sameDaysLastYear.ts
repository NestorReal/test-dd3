import { startOfWeek, endOfWeek, subWeeks, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const sameDaysLastYear = () => {
  const dayWeekAgo = subWeeks(new Date(), 1);
  const dayYearAgo = subYears(dayWeekAgo, 1);
  const lowDate = startOfWeek(dayYearAgo, { weekStartsOn: 1 });
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfWeek(lowDate, { weekStartsOn: 1 });
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = 'Semana Año Ant';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 2.0,
  };
};

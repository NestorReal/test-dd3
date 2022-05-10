import { startOfWeek, endOfWeek, subWeeks, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';
import i18next from '../../../i18n';

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
  const label = i18next.t('global:time.week_previous_year');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 2.0,
  };
};

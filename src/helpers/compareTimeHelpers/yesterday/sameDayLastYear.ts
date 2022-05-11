import { startOfDay, endOfDay, subYears, subDays } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const sameDayLastYear = () => {
  const yesterday = subDays(new Date(), 1);
  const yesterdayLastYear = subYears(yesterday, 1);
  const lowDate = startOfDay(yesterdayLastYear);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfDay(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)}`;
  const label = i18next.t('global:time.same_day_previous_year');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 0.2,
  };
};

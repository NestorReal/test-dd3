import { startOfDay, endOfDay, subWeeks, subDays, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const sameDayLastWeek = () => {
  const yesterday = subDays(new Date(), 1);
  const yesterdayLastWeek = subWeeks(yesterday, 1);
  const lowDate = startOfDay(yesterdayLastWeek);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfDay(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)}`;
  const label = i18next.t('global:time.same_day_previous_week');;

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 0.1,
  };
};

import { startOfWeek, endOfWeek, subWeeks, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const lastWeekRange = () => {
  const todayMinusOneWeek = subWeeks(new Date(), 1);
  const lowDate = startOfWeek(todayMinusOneWeek, { weekStartsOn: 1 });
  const formatedISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfWeek(todayMinusOneWeek, { weekStartsOn: 1 });
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(todayMinusOneWeek) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  return {
    lowDate: formatedISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: i18next.t('global:time.last_week'),
  };
};

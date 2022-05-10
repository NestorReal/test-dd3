import { startOfWeek, endOfWeek, subWeeks, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const weekBefore = () => {
  const dayTwoWeeksAgo = subWeeks(new Date(), 2);
  const lowDate = startOfWeek(dayTwoWeeksAgo, { weekStartsOn: 1 });
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfWeek(lowDate, { weekStartsOn: 1 });
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  const label = i18next.t('global:time.last_week');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 2.1,
  };
};

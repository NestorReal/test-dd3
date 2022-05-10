import { startOfWeek, endOfToday } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const currentWeekRange = () => {
  const lowDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const formatedISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfToday();
  const formatedISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDay(lowDate)} - ${formatToMonthAndDay(upDate)}`;
  return {
    lowDate: formatedISOLowDate,
    upDate: formatedISOUpDate,
    sideLabel,
    label: i18next.t('global:time.current_week'),
  };
};

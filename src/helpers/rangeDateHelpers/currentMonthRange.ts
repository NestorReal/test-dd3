import { startOfMonth, endOfToday } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const currentMonthRange = () => {
  const lowDate = startOfMonth(new Date());
  const formatedISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfToday();
  const formatedToISOUpdate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDay(lowDate)} - ${formatToMonthAndDay(upDate)}`;
  return {
    lowDate: formatedISOLowDate,
    upDate: formatedToISOUpdate,
    sideLabel,
    label: i18next.t('global:time.current_month'),
  };
};

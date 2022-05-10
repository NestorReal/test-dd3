import { startOfYesterday, endOfYesterday } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const yesterdayRange = () => {
  const lowDate = startOfYesterday();
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfYesterday();
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = formatToMonthAndDay(startOfYesterday());
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: i18next.t('global:time.yesterday'),
  };
};

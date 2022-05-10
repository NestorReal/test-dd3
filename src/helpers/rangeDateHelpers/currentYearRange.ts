import { startOfYear, endOfToday } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDay } from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const currentYearRange = () => {
  const lowDate = startOfYear(new Date());
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfToday();
  const formatedTOISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDay(lowDate)} - ${formatToMonthAndDay(upDate)}`;
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedTOISOUpDate,
    sideLabel,
    label: i18next.t('global:time.current_year'),
  };
};

import { startOfYear, endOfYear, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const lastYearRange = () => {
  const todayMinusOneYear = subYears(new Date(), 1);
  const lowDate = startOfYear(todayMinusOneYear);
  const formatedTOISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfYear(todayMinusOneYear);
  const formatedTOISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  return {
    lowDate: formatedTOISOLowDate,
    upDate: formatedTOISOUpDate,
    sideLabel,
    label: i18next.t('global:time.last_year'),
  };
};

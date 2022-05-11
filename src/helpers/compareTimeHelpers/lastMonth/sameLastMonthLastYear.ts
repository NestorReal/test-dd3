import { startOfMonth, endOfMonth, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const sameLastMonthLastYear = () => {
  const dayYearAgo = subYears(new Date(), 1);
  const lowDate = startOfMonth(dayYearAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfMonth(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = i18next.t('global:time.month_previous_year');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 4.1,
  };
};

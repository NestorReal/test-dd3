import { startOfQuarter, endOfQuarter, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const sameQuarterLastYear = () => {
  const dayYearAgo = subYears(new Date(), 1);
  const lowDate = startOfQuarter(dayYearAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = i18next.t('global:time.q_previous_year');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 5.1,
  };
};

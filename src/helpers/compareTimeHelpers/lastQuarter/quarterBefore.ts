import { startOfQuarter, endOfQuarter, subQuarters, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../formatDateHelpers';
import i18next from '../../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const quarterBefore = () => {
  const dayTwoQuartersAgo = subQuarters(new Date(), 2);
  const lowDate = startOfQuarter(dayTwoQuartersAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  const label = i18next.t('global:time.previous_q');

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 6.0,
  };
};

import { startOfQuarter, endOfQuarter, subQuarters, isThisYear } from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../formatDateHelpers';
import i18next from '../../i18n';

// eslint-disable-next-line import/prefer-default-export
export const lastQuarterRange = () => {
  const todayMinusOneQuarter = subQuarters(new Date(), 1);
  const lowDate = startOfQuarter(todayMinusOneQuarter);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(todayMinusOneQuarter);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(todayMinusOneQuarter)
    ? formatToMonthAndDay
    : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  return {
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    label: i18next.t('global:time.previous_q'),
  };
};

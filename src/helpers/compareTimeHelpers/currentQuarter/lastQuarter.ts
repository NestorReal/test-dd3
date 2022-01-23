import {
  startOfQuarter, endOfQuarter, subQuarters, isThisYear,
} from 'date-fns';
import {
  formatToISOWithoutTimeZone,
  formatToMonthAndDay,
  formatToMonthAndDayAndYear,
} from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastQuarter = () => {
  const dayQuarterAgo = subQuarters(new Date(), 1);
  const lowDate = startOfQuarter(dayQuarterAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const formatFn = isThisYear(lowDate) ? formatToMonthAndDay : formatToMonthAndDayAndYear;
  const sideLabel = `${formatFn(lowDate)} - ${formatFn(upDate)}`;
  const label = 'Q Anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 5.0,
  };
};

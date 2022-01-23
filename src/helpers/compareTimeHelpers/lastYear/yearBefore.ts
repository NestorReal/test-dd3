import { startOfYear, endOfYear, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const yearBefore = () => {
  const dayTwoQuartersAgo = subYears(new Date(), 2);
  const lowDate = startOfYear(dayTwoQuartersAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfYear(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = 'Año Anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 8.0,
  };
};

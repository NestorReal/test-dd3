import { startOfQuarter, endOfQuarter, subYears } from 'date-fns';
import { formatToISOWithoutTimeZone, formatToMonthAndDayAndYear } from '../../formatDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const sameLastQuarterLastYear = () => {
  const dayYearAgo = subYears(new Date(), 1);
  const lowDate = startOfQuarter(dayYearAgo);
  const formatedToISOLowDate = formatToISOWithoutTimeZone(lowDate);
  const upDate = endOfQuarter(lowDate);
  const formatedToISOUpDate = formatToISOWithoutTimeZone(upDate);
  const sideLabel = `${formatToMonthAndDayAndYear(lowDate)} - ${formatToMonthAndDayAndYear(
    upDate,
  )}`;
  const label = 'Q Año Anterior';

  return {
    label,
    lowDate: formatedToISOLowDate,
    upDate: formatedToISOUpDate,
    sideLabel,
    id: 6.1,
  };
};

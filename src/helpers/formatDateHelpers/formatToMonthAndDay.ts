import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize } from '../stringHelpers';

// eslint-disable-next-line import/prefer-default-export
export const formatToMonthAndDay = (date: number | Date) => {
  const formated = format(date, 'LLL dd', { locale: es });
  return capitalize(formated);
};

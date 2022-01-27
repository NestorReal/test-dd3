import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export const formatToISOWithoutTimeZone = (date: number | Date) =>
  format(date, "yyyy-MM-dd'T'HH:mm:ss");

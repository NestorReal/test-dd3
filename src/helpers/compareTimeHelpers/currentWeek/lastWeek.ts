import { lastWeekRange } from '../../rangeDateHelpers';

// eslint-disable-next-line import/prefer-default-export
export const lastWeek = () => ({
  ...lastWeekRange(),
  id: 1.0,
});

import {
  yesterdayRange,
  currentWeekRange,
  currentMonthRange,
  currentQuarterRange,
  currentYearRange,
  lastWeekRange,
  lastMonthRange,
  lastQuarterRange,
  lastYearRange,
} from '.';
import i18next from '../../i18n';
// eslint-disable-next-line import/prefer-default-export

export const TIME_RANGES_ID = {
  yesterday: 0,
  currentWeek: 1,
  lastWeek: 2,
  currentMonth: 3,
  lastMonth: 4,
  currentQ: 5,
  lastQ: 6,
  currentYear: 7,
  lastYear: 8,
};

export const CUSTOM_RANGES_ID = {
  exactDay: 9,
  range: 10,
  without: 100,
};

export const conformRanges = {
  preformed: [
    { ...yesterdayRange(), id: TIME_RANGES_ID.yesterday },
    { ...currentWeekRange(), id: TIME_RANGES_ID.currentWeek },
    { ...lastWeekRange(), id: TIME_RANGES_ID.lastWeek },
    { ...currentMonthRange(), id: TIME_RANGES_ID.currentMonth },
    { ...lastMonthRange(), id: TIME_RANGES_ID.lastMonth },
    { ...currentQuarterRange(), id: TIME_RANGES_ID.currentQ },
    { ...lastQuarterRange(), id: TIME_RANGES_ID.lastQ },
    { ...currentYearRange(), id: TIME_RANGES_ID.currentYear },
    { ...lastYearRange(), id: TIME_RANGES_ID.lastYear },
  ],
  custom: [
    {
      label: i18next.t('global:time.exact_day'),
      sideLabel: '',
      id: CUSTOM_RANGES_ID.exactDay,
      lowDate: '',
      upDate: '',
    },
    {
      label: i18next.t('global:time.date_range'),
      sideLabel: '',
      id: CUSTOM_RANGES_ID.range,
      lowDate: '',
      upDate: '',
    },
  ],
};

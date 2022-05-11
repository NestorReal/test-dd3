import {
  dayBeforeYesterday,
  sameDayLastWeek,
  sameDayLastYear,
  lastWeek,
  sameDaysLastYear,
  weekBefore,
  lastMonth,
  sameMonthLastYear,
  monthBefore,
  sameLastMonthLastYear,
  lastQuarter,
  sameQuarterLastYear,
  quarterBefore,
  sameLastQuarterLastYear,
  lastYear,
  yearBefore,
} from '.';
import { TIME_RANGES_ID, CUSTOM_RANGES_ID } from '../rangeDateHelpers';
import i18next from '../../i18n';

export const withoutComparison = {
  label: i18next.t('global:time.without_comparison'),
  sideLabel: '',
  lowDate: '',
  upDate: '',
  id: 100,
};

// eslint-disable-next-line import/prefer-default-export
export const conformComparations = {
  [TIME_RANGES_ID.yesterday]: [
    { ...dayBeforeYesterday() },
    { ...sameDayLastWeek() },
    { ...sameDayLastYear() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.currentWeek]: [{ ...lastWeek() }, { ...withoutComparison }],
  [TIME_RANGES_ID.lastWeek]: [
    { ...sameDaysLastYear() },
    { ...weekBefore() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.currentMonth]: [
    { ...lastMonth() },
    { ...sameMonthLastYear() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.lastMonth]: [
    { ...monthBefore() },
    { ...sameLastMonthLastYear() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.currentQ]: [
    { ...lastQuarter() },
    { ...sameQuarterLastYear() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.lastQ]: [
    { ...quarterBefore() },
    { ...sameLastQuarterLastYear() },
    { ...withoutComparison },
  ],
  [TIME_RANGES_ID.currentYear]: [{ ...lastYear() }, { ...withoutComparison }],
  [TIME_RANGES_ID.lastYear]: [{ ...yearBefore() }, { ...withoutComparison }],
  [CUSTOM_RANGES_ID.exactDay]: [
    { ...withoutComparison },
    {
      label: i18next.t('global:time.exact_day'),
      sideLabel: '',
      lowDate: '',
      upDate: '',
      id: 9.0,
    },
  ],
  [CUSTOM_RANGES_ID.range]: [
    { ...withoutComparison },
    {
      label: i18next.t('global:time.date_range'),
      sideLabel: '',
      lowDate: '',
      upDate: '',
      id: 10.0,
    },
  ],
};

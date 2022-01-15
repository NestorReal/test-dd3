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

const withoutComparison = {
  label: 'Sin Comparación',
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
    {
      label: 'Día Exacto',
      sideLabel: '',
      lowDate: '',
      upDate: '',
      id: 9.0,
    },
    { ...withoutComparison },
  ],
  [CUSTOM_RANGES_ID.range]: [
    {
      label: 'Rango de Fechas',
      sideLabel: '',
      lowDate: '',
      upDate: '',
      id: 10.0,
    },
    { ...withoutComparison },
  ],
};

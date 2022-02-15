/* eslint-disable import/prefer-default-export */
import { ClassificationResults } from '../../../../types/graphs/rangeBar';

export const data: ClassificationResults = {
  count: {
    totals: {
      value: 80538,
      secondary_value: 80472,
      diff: 0.08,
    },
    males: {
      value: 56876,
      secondary_value: 58977,
      diff: -3.56,
    },
    females: {
      value: 23662,
      secondary_value: 21495,
      diff: 10.08,
    },
  },
  main_range: ['2022-02-01T00:00:00', '2022-02-10T23:59:59'],
  secondary_range: ['2022-01-01T00:00:00', '2022-01-28T23:59:59'],
  data: {
    visitors: [
      {
        value: 1,
        age_range: [0, 15],
        gender: 'f',
        secondary_value: 100,
        diff: -99.0,
      },
      {
        value: 0,
        age_range: [0, 15],
        gender: 'm',
        secondary_value: 171,
        diff: -100.0,
      },
      {
        value: 0,
        age_range: [16, 24],
        gender: 'f',
        secondary_value: 172,
        diff: -100.0,
      },
      {
        value: 0,
        age_range: [16, 24],
        gender: 'm',
        secondary_value: 294,
        diff: -100.0,
      },
      {
        value: 4641,
        age_range: [25, 34],
        gender: 'm',
        secondary_value: 24746,
        diff: -81.25,
      },
      {
        value: 1803,
        age_range: [25, 34],
        gender: 'f',
        secondary_value: 9786,
        diff: -81.58,
      },
      {
        value: 143,
        age_range: [35, 44],
        gender: 'f',
        secondary_value: 3574,
        diff: -96.0,
      },
      {
        value: 252,
        age_range: [35, 44],
        gender: 'm',
        secondary_value: 8269,
        diff: -96.95,
      },
      {
        value: 442,
        age_range: [45, 54],
        gender: 'f',
        secondary_value: 7086,
        diff: -93.76,
      },
      {
        value: 1435,
        age_range: [45, 54],
        gender: 'm',
        secondary_value: 14714,
        diff: -90.25,
      },
      {
        value: 1293,
        age_range: [55, 64],
        gender: 'm',
        secondary_value: 6697,
        diff: -80.69,
      },
      {
        value: 456,
        age_range: [55, 64],
        gender: 'f',
        secondary_value: 2170,
        diff: -78.99,
      },
      {
        value: 0,
        age_range: [65, 100],
        gender: 'f',
        secondary_value: 29,
        diff: -100.0,
      },
      {
        value: 0,
        age_range: [65, 100],
        gender: 'm',
        secondary_value: 172,
        diff: -100.0,
      },
    ],
  },
};

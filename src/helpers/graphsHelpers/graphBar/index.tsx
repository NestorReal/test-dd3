/* eslint-disable camelcase */
import deepClone from 'lodash.clonedeep';
import { cleanNulls } from '../graphs/cleanNulls';
import { formatHours } from '../graphs/formatHours';

import {
  HourAverageResults,
  FormattedHourAverageResult,
  Data,
} from '../../../types/graphs/graphBar';

export const formatHourAverageResults = (
  data: HourAverageResults,
): FormattedHourAverageResult[] => {
  if (!data) return [];
  const unformattedData = deepClone(data);
  const unformattedDataValues = unformattedData.data;
  const { main_range } = unformattedData;
  const { secondary_range } = unformattedData;
  cleanNulls(unformattedDataValues);
  const keys = Object.keys(unformattedDataValues);

  const formattedData = keys.map((key) => {
    const formattedDataObject: FormattedHourAverageResult = unformattedDataValues[
      key as keyof Data
    ]!.reduce(
      (accum: FormattedHourAverageResult, element) => {
        accum.data.push(element.value);
        accum.diff.push(element.diff)
        accum.hour.push(element.hour)
        accum.comparedData.push(element.secondary_value);
        return accum;
      },
      {
        data: [],
        diff: [],
        hour: [],
        comparedData: [],
        name: '',
        mainRange: [],
        secondaryRange: [],
      },
    );

    formattedDataObject.name = key;
    formattedDataObject.mainRange = main_range || [];
    formattedDataObject.secondaryRange = secondary_range || [];
    return formattedDataObject;
  });
  return formattedData;
};


export const labelFormatData = (data: FormattedHourAverageResult[]): string[] => {
  if (!data) return [];
  const [values] = data;
  return formatHours(values.hour);
}
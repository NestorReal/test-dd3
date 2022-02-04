/* eslint-disable camelcase */
import deepClone from 'lodash.clonedeep';
import { cleanNulls } from '../graphs/cleanNulls';
import { rgbToHex } from './RGBAtoHEX';
import {
  DayWeekAverageResult,
  FormatedDayWeekAverageResult,
  Data,
} from '../../../types/graphs/heatmap';

export const rangesColors = (data: any) => {
  if (!data) return {};
  const arrayData: any = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < Object.values(data[i].colors).length; j += 1) {
      const rgbaArray = data[i].colors[j];
      const [r, g, b] = rgbaArray;
      arrayData.push({
        color: rgbToHex(r, g, b),
        from: data[i].data[j],
        to: data[i].data[j],
        name: data[i].name,
      });
    }
  }
  return {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 16,
      distributed: true,
      colorScale: { ranges: arrayData },
    },
  };
};

export const formatDayWeekAverageResults = (
  data: DayWeekAverageResult,
): FormatedDayWeekAverageResult[] => {
  if (!data) return [];
  const unformattedData = deepClone(data);
  const unformattedDataValues = unformattedData.data;
  const { main_range } = unformattedData;
  const { secondary_range } = unformattedData;
  cleanNulls(unformattedDataValues);
  const keys = Object.keys(unformattedDataValues);

  const formattedData = keys.map((key) => {
    const formattedDataObject: FormatedDayWeekAverageResult = unformattedDataValues[
      key as keyof Data
    ]!.reduce(
      (accum: FormatedDayWeekAverageResult, element) => {
        accum.data.push(element.value);
        accum.diff.push(element.diff);
        accum.colors.push(element.color);
        accum.comparedData.push(element.secondary_value);
        return accum;
      },
      {
        data: [],
        diff: [],
        comparedData: [],
        colors: [],
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

import { formatHours } from '../graphs/formatHours';
import {
  ClassificationHourResult,
  Data,
  DataClassification,
  FormattedClassificationHourResult,
  ClassificationLocationResult,
  FormattedResponseClassificationLocationHour,
} from '../../../types/graphs/groupedGraph';

import { OptionsGroupDefault, StoresResult, OptionsGroup } from '../../../types/filters';

export const dataClassificationGrouped = (
  data: ClassificationHourResult | ClassificationLocationResult,
  param: 'genders' | 'visitors' | 'age_ranges',
): FormattedClassificationHourResult[] => {
  const dataValues = data.data;
  const keys = Object.keys(dataValues);
  const [unformattedDataArray] = keys.map((key) => dataValues[key as keyof Data]);
  const paramData = unformattedDataArray
    .map((values) => values[param])
    .map((objectData) => objectData.map((valuesData) => valuesData.value));
  let arrayData: number[] = [];
  const newArray: number[][] = [];
  for (let i = 0; i < paramData[1].length; i += 1) {
    for (let j = 0; j < paramData.length; j += 1) {
      if (paramData[j][i] !== undefined) {
        arrayData.push(paramData[j][i]);
      } else {
        arrayData.push(0);
      }
    }
    newArray.push(arrayData);
    arrayData = [];
  }
  return newArray.map((arrayDataNumbers) => ({ data: arrayDataNumbers }));
};

export const labelClassificationGrouped = (data: ClassificationHourResult): string[] => {
  if (!data) return [];
  const dataValues = data.data;
  const keys = Object.keys(dataValues);
  const [unformattedDataArray] = keys.map((key) => dataValues[key as keyof Data]);
  const paramData = unformattedDataArray.map((values) => values.hour);
  return formatHours(paramData);
};

export const labelClassificationStore = (data: ClassificationLocationResult) => {
  if (!data) return [];
  const dataValues = data.data;
  const keys = Object.keys(dataValues);
  const [unformattedDataArray] = keys.map((key) => dataValues[key as keyof DataClassification]);
  const paramData = unformattedDataArray.map((values) => values.store_id);
  return paramData;
};

export const retrieveOptionName = (id: number | string, optionGroups: OptionsGroup[]) => {
  if (!optionGroups) return '';
  const mappedOptions = optionGroups.map((option) => option.options);
  const flattenOptions = mappedOptions.flat();

  const foundOption = flattenOptions.find((option) => (option ? option.id === id : null));
  if (foundOption) {
    return foundOption.name;
  }
  return '';
};

export const getStoreLabelsGroupedGraph = (
  data: FormattedResponseClassificationLocationHour,
  stores: StoresResult,
): string[] => {
  if (!data || !stores) return [''];
  const dataLabels = data.labels.map((idValue) =>
    retrieveOptionName(idValue, stores.results || OptionsGroupDefault),
  );
  return dataLabels;
};

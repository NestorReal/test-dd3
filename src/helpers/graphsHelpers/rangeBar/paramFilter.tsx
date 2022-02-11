import { Data } from '../../../types/graphs/rangeBar';
/* eslint-disable import/prefer-default-export */
export const filterDataByParameter = (data: Data, param: 'm' | 'f') => {
  const keys = Object.keys(data);
  const [unformattedDataArray] = keys.map((metric) => data[metric as keyof Data]);
  const formattedData = unformattedDataArray.filter((element) => element.gender === param);
  return formattedData;
};

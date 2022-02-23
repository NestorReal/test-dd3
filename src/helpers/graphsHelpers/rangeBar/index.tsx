import { filterDataByParameter } from './paramFilter';
import { ClassificationResults, FormattedDataEntity } from '../../../types/graphs/rangeBar';

/* eslint-disable import/prefer-default-export */
export const dataClassification = (data: ClassificationResults): FormattedDataEntity[] => {
  const dataValues = data.data;
  const dataFemale = filterDataByParameter(dataValues, 'm');
  const dataMale = filterDataByParameter(dataValues, 'f');
  return [
    {
      data: dataFemale.map((infoFemale) => {
        const negativeValue = infoFemale.value * -1;
        return negativeValue;
      }),
      name: 'Mujeres',
    },
    {
      data: dataMale.map((infoMale: any) => infoMale.value),
      name: 'Hombres',
    },
  ];
};

export const valueAxis = (data: FormattedDataEntity[]): number => {
  if (!data) return 0;
  const arrayData = data
    .map((objectData) => objectData.data)
    .flat()
    .map((valueNumber) => Math.abs(valueNumber));
  return Math.max(...arrayData);
};

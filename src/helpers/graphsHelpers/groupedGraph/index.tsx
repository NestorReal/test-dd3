import { formatHours } from '../graphs/formatHours';
import { ClassificationHourResult, Data, FormattedClassificationHourResult } from '../../../types/graphs/groupedGraph';

export const dataClassificationGrouped = (data: ClassificationHourResult, param: 'genders'|'visitors'|'age_ranges') : FormattedClassificationHourResult[] => {
    const dataValues = data.data;
    const keys = Object.keys(dataValues);
    const [unformattedDataArray] = keys.map(key => dataValues[key as keyof Data]);
    const paramData = unformattedDataArray.map(values => values[param]).map(objectData => objectData.map(valuesData => valuesData.value))
    let arrayData : number[] = [];
    const newArray : number[][] = [];
    for(let i = 0; i < paramData[1].length; i += 1){
      for(let j = 0; j < paramData.length; j += 1){
        if(paramData[j][i] !== undefined){
          arrayData.push(paramData[j][i]);
        } else{
          arrayData.push(0);
        }
      }
    newArray.push(arrayData);
    arrayData = [];
  }
  return newArray.map(arrayDataNumbers => ({data: arrayDataNumbers}));
}

export const labelClassificationGrouped = (data?: ClassificationHourResult): string[]  => {
    if(!data) return [];
    const dataValues = data.data;
    const keys = Object.keys(dataValues);
    const [unformattedDataArray] = keys.map(key => dataValues[key as keyof Data]);
    const paramData = unformattedDataArray.map(values => values.hour)
    return formatHours(paramData);
}

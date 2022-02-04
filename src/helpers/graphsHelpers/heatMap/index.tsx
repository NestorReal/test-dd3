import { getValues } from './getValues';
import { getLabel } from './getLabel';
import { cleanNulls } from '../graphs/cleanNulls';
import { arrayToRGBA } from './arrayToRGBA';

export const formatData = (data: any) => {
  const dataValues = data.data;
  const main_range = data.main_range;
  const secondary_range = data.secondary_range;
  cleanNulls(dataValues);
  const newData = Object.keys(dataValues)
          .map(categories => Object.keys(dataValues[categories].pop())
          .map(labels => ({
            [getLabel(labels)]: getValues(dataValues[categories], labels),
            secondaryRange: secondary_range,
            mainRange: main_range,
            name: categories,
          })));
  return newData.map(newDataArray => newDataArray.reduce((accum, elem) => Object.assign(accum, elem)));
}

export const rangesColors = (data: any)  => {
  let arrayData : any = [];
  for(let i = 0; i < data.length; i += 1){
      for(let j = 0; j < Object.values(data[i]['colors']).length; j+= 1){
          arrayData.push(
              {
                  color: arrayToRGBA(data[i]['colors'][j]), 
                  from:data[i]['data'][j], 
                  to: data[i]['data'][j],
                  name: data[i]['name']
              });
      }
  }
  return  {heatmap: {shadeIntensity: 0.5,radius: 16,distributed: true,colorScale: {ranges:arrayData}}};
} 

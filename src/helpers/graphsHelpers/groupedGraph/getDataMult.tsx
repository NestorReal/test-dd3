// eslint-disable-next-line import/prefer-default-export
import { Data } from '../../../types/graphs/groupedGraph';
export const getDataMult = (data: Data, param: string) => Object.keys(data).map(dataInfo => data[dataInfo as keyof Data].map((item: any) => item[param]));


// eslint-disable-next-line import/prefer-default-export
// import { Data, VisitorsEntity } from '../../../types/graphs/groupedGraph';
// export const getDataMult = (data: Data, param: string) => {
//     const keys = Object.keys(data);
//     const unformattedDataArray = keys.map(dataInfo => data[dataInfo as keyof Data]);
//     console.log(param)
//     const formattedData = unformattedDataArray.map((item: any) => item[param]);
//     return formattedData;
// };

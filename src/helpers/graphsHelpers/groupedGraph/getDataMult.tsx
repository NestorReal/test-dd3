// eslint-disable-next-line import/prefer-default-export
import { Data } from '../../../types/graphs/groupedGraph';
export const getDataMult = (data: Data, param: string) => Object.keys(data).map(dataInfo => data[dataInfo as keyof Data].map((item: any) => item[param]));
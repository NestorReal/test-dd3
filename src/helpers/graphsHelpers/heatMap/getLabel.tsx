import { dictionary } from '../graphs/dictionaryLabels';

export const getLabel = (label: string) => dictionary[label] !== undefined ? dictionary[label] : label;

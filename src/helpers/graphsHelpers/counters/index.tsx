import { DataForCounter } from '../../../types/graphs/counter';
import { CounterData } from '../../../components/molecules/Counters';
import { CountEntity } from '../../../types/graphs/rangeBar';

const emptyCounterObject = {
  name: '',
  diff: null,
  value: null,
  secondary_value: null,
};

export const adaptStoreCounters = (data: DataForCounter): CounterData => {
  if (!data)
    return { first: emptyCounterObject, second: emptyCounterObject, third: emptyCounterObject };
  return {
    first: { ...data.visitors, name: 'Entradas' },
    second: { ...data.transactions, name: 'Transacciones' },
    third: { ...data.conversions, name: 'Tasa de conversión' },
  };
};

export const adaptClassificationCounters = (data: CountEntity): CounterData => {
  if (!data)
    return { first: emptyCounterObject, second: emptyCounterObject, third: emptyCounterObject };
  return {
    first: { ...data.females, name: 'Mujeres' },
    second: { ...data.males, name: 'Hombres' },
    third: { ...data.totals, name: 'Total' },
  };
};

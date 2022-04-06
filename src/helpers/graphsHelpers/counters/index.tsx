import { useTranslation } from 'react-i18next';
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
  const [t] = useTranslation("global");
  return {
    first: { ...data.visitors, name: t("cards.visitors") },
    second: { ...data.transactions, name: t("cards.transactions") },
    third: { ...data.conversions, name: t("cards.conversion") },
  };
};

export const adaptClassificationCounters = (data: CountEntity): CounterData => {
  if (!data)
    return { first: emptyCounterObject, second: emptyCounterObject, third: emptyCounterObject };
  const [t] = useTranslation("global");
  return {
    first: { ...data.females, name: t("cards.women") },
    second: { ...data.males, name: t("cards.mens") },
    third: { ...data.totals, name: t("cards.total") },
  };
};

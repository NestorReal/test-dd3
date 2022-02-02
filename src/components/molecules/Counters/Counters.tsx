import React from 'react';
import { DataForCounter } from '../../../types/graphs/counter';
import Card from '../Card';
import Container from '../../reusableStyledComponents/Container';
import Skeleton from '../../atoms/Skeleton';

interface ICountersProps {
  counters: DataForCounter;
  isLoading: boolean;
}

const Counters: React.FunctionComponent<ICountersProps> = ({
  counters,
  isLoading = false,
}: ICountersProps) => {
  const { visitors, transactions, conversions } = counters;
  return (
    <Container display="flex" justifyContent="space-between">
      {isLoading ? (
        <>
          <Skeleton width={340} height={102} borderRadius={8} />
          <Skeleton width={340} height={102} borderRadius={8} />
          <Skeleton width={340} height={102} borderRadius={8} />
        </>
      ) : (
        <>
          <Card
            title="Entradas"
            value={Number(visitors.value)}
            upDown={visitors.diff}
            upDownTypography="paragraph2"
          />
          <Card
            title="Transacciones"
            value={Number(transactions.value)}
            upDown={transactions.diff}
            upDownTypography="paragraph2"
          />
          <Card
            title="Tasa de Conversión"
            value={Number(conversions.value)}
            upDown={conversions.diff}
            upDownTypography="paragraph2"
          />
        </>
      )}
    </Container>
  );
};

export default Counters;

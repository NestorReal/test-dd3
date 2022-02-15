import React from 'react';
import Card from '../Card';
import Container from '../../reusableStyledComponents/Container';
import Skeleton from '../../atoms/Skeleton';
import { Entity } from '../../../types/graphs/counter';

export interface CounterEntity extends Entity {
  name: string;
}
export interface CounterData {
  first: CounterEntity;
  second: CounterEntity;
  third: CounterEntity;
}
export interface ICountersProps {
  counters: CounterData;
  isLoading: boolean;
}

const Counters: React.FunctionComponent<ICountersProps> = ({
  counters,
  isLoading = false,
}: ICountersProps) => {
  const { first, second, third } = counters;
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
            title={first.name}
            value={Number(first.value)}
            upDown={Number(first.diff)}
            upDownTypography="paragraph2"
          />
          <Card
            title={second.name}
            value={Number(second.value)}
            upDown={Number(second.diff)}
            upDownTypography="paragraph2"
          />
          <Card
            title={third.name}
            value={Number(third.value)}
            upDown={Number(third.diff)}
            upDownTypography="paragraph2"
          />
        </>
      )}
    </Container>
  );
};

export default Counters;

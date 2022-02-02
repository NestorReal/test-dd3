import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import { useGetCounterDataQuery } from '../../features/vicoApi';
import Counters from '../../components/molecules/Counters';
import { defaultCountersData } from '../../types/graphs/counter';
import CountersContainer from './styled';

const Dashboard = () => {
  const filtersSelected = useAppSelector((state) => state.filters);
  const query = buildQuery(filtersSelected);
  const {
    data: countersResults,
    isLoading: isCounterResultsLoading,
    isFetching: isCounterResultsFetching,
  } = useGetCounterDataQuery(query, { skip: filtersSelected.stores.length === 0 });

  return (
    <CountersContainer>
      <Counters
        counters={countersResults ? countersResults.data : defaultCountersData}
        isLoading={isCounterResultsLoading || isCounterResultsFetching}
      />
    </CountersContainer>
  );
};

export default Dashboard;

import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import { useGetCounterDataQuery, useGetDayWeekAverageQuery } from '../../features/vicoApi';
import Counters from '../../components/molecules/Counters';
import Heatmap from '../../components/organisms/Heatmap';
import { defaultCountersData } from '../../types/graphs/counter';
import { CountersContainer, HeatMapContainer } from './styled';
import { defautlFormatedDayWeekAverageResult } from '../../types/graphs/heatmap';
import { rangesColors } from '../../helpers/graphsHelpers/heatMap';

const Dashboard = () => {
  const filtersSelected = useAppSelector((state) => state.filters);
  const query = buildQuery(filtersSelected);
  const {
    data: countersResults,
    isLoading: isCounterResultsLoading,
    isFetching: isCounterResultsFetching,
  } = useGetCounterDataQuery(query, { skip: filtersSelected.stores.length === 0 });

  const {
    data: dayWeekAverageResults,
    isLoading: isLoadingDayWeekAverageResults,
    isFetching: isFetchingDayWeekAverageResults,
  } = useGetDayWeekAverageQuery(query, {
    skip: filtersSelected.stores.length === 0,
  });

  return (
    <>
      <CountersContainer>
        <Counters
          counters={countersResults ? countersResults.data : defaultCountersData}
          isLoading={isCounterResultsLoading || isCounterResultsFetching}
        />
      </CountersContainer>
      <HeatMapContainer>
        <Heatmap
          data={dayWeekAverageResults || defautlFormatedDayWeekAverageResult}
          colorScale={rangesColors(dayWeekAverageResults)}
          isLoading={isLoadingDayWeekAverageResults || isFetchingDayWeekAverageResults}
        />
      </HeatMapContainer>
    </>
  );
};

export default Dashboard;

import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import { useGetCounterDataQuery, useGetDayWeekAverageQuery, useGetHourAverageQuery } from '../../features/vicoApi';
import Counters from '../../components/molecules/Counters';
import Heatmap from '../../components/organisms/Heatmap';
import GraphBar from '../../components/organisms/GraphBar';
import { defaultCountersData } from '../../types/graphs/counter';
import { CountersContainer, HeatMapContainer, GraphBarContainer } from './styled';
import { defaultFormattedDayWeekAverageResult } from '../../types/graphs/heatmap';
import { defaultFormattedHourAverageResult } from '../../types/graphs/graphBar';
import { rangesColors } from '../../helpers/graphsHelpers/heatMap';
import { labelFormatData } from '../../helpers/graphsHelpers/graphBar';

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

  const {
    data: hourAverageResults,
    isLoading: isLoadingHourAverageResults,
    isFetching: isFetchingHourAverageResults,
  } = useGetHourAverageQuery(query, {
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
          data={dayWeekAverageResults || defaultFormattedDayWeekAverageResult}
          colorScale={rangesColors(dayWeekAverageResults)}
          isLoading={isLoadingDayWeekAverageResults || isFetchingDayWeekAverageResults}
        />
      </HeatMapContainer>
      <GraphBarContainer>
        <GraphBar 
          data={hourAverageResults || defaultFormattedHourAverageResult}
          colors={['#8c4380', '#ff9f2d', '#168fff']}
          labels={hourAverageResults ? labelFormatData(hourAverageResults) : []}
          isLoading={isLoadingHourAverageResults || isFetchingHourAverageResults}
        />
      </GraphBarContainer>
    </>
  );
};

export default Dashboard;

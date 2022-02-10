import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import { useGetCounterDataQuery, useGetDayWeekAverageQuery, useGetHourAverageQuery, useGetClassificationQuery } from '../../features/vicoApi';
import Counters from '../../components/molecules/Counters';
import Heatmap from '../../components/organisms/Heatmap';
import GraphBar from '../../components/organisms/GraphBar';
import { defaultCountersData } from '../../types/graphs/counter';
import { CountersContainer, HeatMapContainer, GraphBarContainer, RangeBarContainer } from './styled';
import { defaultFormattedDayWeekAverageResult } from '../../types/graphs/heatmap';
import { defaultFormattedHourAverageResult } from '../../types/graphs/graphBar';
import { defaultFormattedClassficationResult } from '../../types/graphs/rangeBar';
import { rangesColors } from '../../helpers/graphsHelpers/heatMap';
import { labelFormatData } from '../../helpers/graphsHelpers/graphBar';
import RangeBar from '../../components/organisms/RangeBar';


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

  const {
    data: classificationResults,
    isLoading: isLoadingClassificationResults,
    isFetching: isFetchingClassificationResults,
  } = useGetClassificationQuery(query, {
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
      <RangeBarContainer>
        <RangeBar 
          data={classificationResults || defaultFormattedClassficationResult}
          colors= {['#ba59aa', '#003566']}
          isLoading={isLoadingClassificationResults || isFetchingClassificationResults}
        />
      </RangeBarContainer>
    </>
  );
};

export default Dashboard;

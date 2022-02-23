import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import {
  adaptStoreCounters,
  adaptClassificationCounters,
} from '../../helpers/graphsHelpers/counters';
import {
  useGetCounterDataQuery,
  useGetDayWeekAverageQuery,
  useGetHourAverageQuery,
  useGetClassificationQuery,
  useGetClassificationHourQuery,
} from '../../features/vicoApi';
import Counters from '../../components/molecules/Counters';
import Heatmap from '../../components/organisms/Heatmap';
import GraphBar from '../../components/organisms/GraphBar';
import {
  defaultStoreCountersData,
  defaultClassificationCountersData,
} from '../../types/graphs/counter';
import {
  CountersContainer,
  HeatMapContainer,
  GraphBarContainer,
  RangeBarContainer,
  GroupedGraphContainer,
  TitleContainer,
} from './styled';
import { defaultFormattedDayWeekAverageResult } from '../../types/graphs/heatmap';
import { defaultFormattedHourAverageResult } from '../../types/graphs/graphBar';
import { defaultFormattedClassficationResult } from '../../types/graphs/rangeBar';
import { defaultFormattedClassificationHourResult } from '../../types/graphs/groupedGraph';
import { rangesColors } from '../../helpers/graphsHelpers/heatMap';
import { labelFormatData } from '../../helpers/graphsHelpers/graphBar';
import { valueAxis } from '../../helpers/graphsHelpers/rangeBar';
import RangeBar from '../../components/organisms/RangeBar';
import GroupedGraph from '../../components/organisms/GroupedGraph';
import Section from '../../components/organisms/Section';
import Title from '../../components/atoms/Title';
import Tabs from '../../components/organisms/Tabs';

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

  const {
    data: classificationHourResults,
    isLoading: isLoadingClassificationHourResults,
    isFetching: isFetchingClassificationHourResults,
  } = useGetClassificationHourQuery(query, {
    skip: filtersSelected.stores.length === 0,
  });

  return (
    <>
      <Section title="Objetivos">
        <CountersContainer>
          <TitleContainer>
            <Title typography="caps1Regular" text="Tienda" uppercase />
          </TitleContainer>

          <Counters
            counters={
              countersResults
                ? adaptStoreCounters(countersResults.data)
                : adaptStoreCounters(defaultStoreCountersData)
            }
            isLoading={isCounterResultsLoading || isCounterResultsFetching}
          />
        </CountersContainer>
        <HeatMapContainer>
          <Heatmap
            data={dayWeekAverageResults || defaultFormattedDayWeekAverageResult}
            colorScale={rangesColors(dayWeekAverageResults)}
            isLoading={isLoadingDayWeekAverageResults || isFetchingDayWeekAverageResults}
            categories={['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D']}
            height={150}
          />
        </HeatMapContainer>

        <Tabs title="Entradas por hora del día" nameButtons={['Clientes', 'Sexo', 'Edad']}>
          <GraphBarContainer>
            <GraphBar
              data={hourAverageResults || defaultFormattedHourAverageResult}
              colors={['#8c4380', '#ff9f2d', '#168fff']}
              labels={hourAverageResults ? labelFormatData(hourAverageResults) : []}
              isLoading={isLoadingHourAverageResults || isFetchingHourAverageResults}
            />
          </GraphBarContainer>
          <GroupedGraphContainer>
            <GroupedGraph
              data={classificationHourResults?.genders || defaultFormattedClassificationHourResult}
              optionsData={classificationHourResults?.labels || []}
              isLoading={isLoadingClassificationHourResults || isFetchingClassificationHourResults}
              horizontal={false}
              colors={['#ba59aa', '#003566']}
            />
          </GroupedGraphContainer>
          <GroupedGraphContainer>
            <GroupedGraph
              data={
                classificationHourResults?.ageRanges || defaultFormattedClassificationHourResult
              }
              optionsData={classificationHourResults?.labels || []}
              isLoading={isLoadingClassificationHourResults || isFetchingClassificationHourResults}
              horizontal={false}
              colors={['#168fff', '#17cb49', '#ff9f2d', '#f74141', '#e96fd5', '#9b51e0', '#797979']}
            />
          </GroupedGraphContainer>
        </Tabs>
      </Section>

      <Section title="Demográficos">
        <CountersContainer>
          <Counters
            counters={
              classificationResults
                ? adaptClassificationCounters(classificationResults.counter)
                : adaptClassificationCounters(defaultClassificationCountersData)
            }
            isLoading={isCounterResultsLoading || isCounterResultsFetching}
          />
        </CountersContainer>
        <RangeBarContainer>
          <RangeBar
            data={classificationResults?.data || defaultFormattedClassficationResult}
            colors={['#ba59aa', '#003566']}
            isLoading={isLoadingClassificationResults || isFetchingClassificationResults}
            valueAxis={valueAxis(
              classificationResults?.data || defaultFormattedClassficationResult,
            )}
          />
        </RangeBarContainer>
      </Section>
    </>
  );
};

export default Dashboard;

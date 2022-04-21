import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
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

  const themeContext = useContext(ThemeContext);
  const sizeHeatmap: number = dayWeekAverageResults?.length || 0;
<<<<<<< HEAD
  const [t] = useTranslation("global");
=======
  const size = 100 * sizeHeatmap;
>>>>>>> a4990d9f6dfdb6d4857ceccde0728dab7b238b86

  return (
    <>
      <Section title={t("section.objectives")}>
        <CountersContainer>
          <TitleContainer>
            <Title typography="caps1Regular" text={t("titles.shop")} uppercase />
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
            colorScale={rangesColors(dayWeekAverageResults || defaultFormattedDayWeekAverageResult)}
            isLoading={isLoadingDayWeekAverageResults || isFetchingDayWeekAverageResults}
            categories={['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']}
            height={sizeHeatmap < 3 ? size + 40 : size}
            dateLabelsFromFilters={[filtersSelected.time.label, filtersSelected.comparison.label]}
          />
        </HeatMapContainer>

        <Tabs
          title={t("tabs.tickets_hour")}
          nameButtons={[
            t("tabs.customers"),
            t("tabs.gender"),
            t("tabs.age")
          ]}
        >
          <GraphBarContainer>
            <GraphBar
              data={hourAverageResults || defaultFormattedHourAverageResult}
              colors={themeContext.graphs.graphBar.bars.clientsDashboard}
              labels={hourAverageResults ? labelFormatData(hourAverageResults) : []}
              isLoading={isLoadingHourAverageResults || isFetchingHourAverageResults}
              dateLabelsFromFilter={[filtersSelected.time.label, filtersSelected.comparison.label]}
              horizontal={false}
            />
          </GraphBarContainer>
          <GroupedGraphContainer>
            <GroupedGraph
              data={classificationHourResults?.genders || defaultFormattedClassificationHourResult}
              optionsData={classificationHourResults?.labels || []}
              isLoading={isLoadingClassificationHourResults || isFetchingClassificationHourResults}
              horizontal={false}
              colors={themeContext.graphs.groupedGraph.bars.gender}
              dateLabelFromFilter={filtersSelected.time.label}
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
              colors={themeContext.graphs.groupedGraph.bars.ageRange}
              dateLabelFromFilter={filtersSelected.time.label}
            />
          </GroupedGraphContainer>
        </Tabs>
      </Section>

      <Section title={t("section.demographics")}>
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
            colors={themeContext.graphs.rangeBar.bars.gender}
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

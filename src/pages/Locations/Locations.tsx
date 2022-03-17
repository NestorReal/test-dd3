import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import {
  useGetCounterLocationQuery,
  useGetClassificationLocationQuery,
  useGetStoresByCategoryQuery,
} from '../../features/vicoApi';
import GraphBar from '../../components/organisms/GraphBar';
import Heatmap from '../../components/organisms/Heatmap';
import GroupedGraph from '../../components/organisms/GroupedGraph';
import { HeaderContainer, HeatMapContainer, GroupedGraphContainer, TitleContainer } from './styled';
import { defaultFormattedClassificationHourResult } from '../../types/graphs/groupedGraph';
import { defaultFormattedHourAverageResult } from '../../types/graphs/graphBar';
import { StoresResultDefault } from '../../types/filters';
import {
  defaultFormattedDayWeekAverageResult,
  defaultFormattedCounterLocationResult,
} from '../../types/graphs/heatmap';
import { rangesColors, getStoreLabels, formatStore } from '../../helpers/graphsHelpers/heatMap';
import Section from '../../components/organisms/Section';
import Title from '../../components/atoms/Title';
import Tabs from '../../components/organisms/Tabs';

const Locations = () => {
  const filtersSelected = useAppSelector((state) => state.filters);
  const query = buildQuery(filtersSelected);
  const {
    data: counterLocationResults,
    isLoading: isLoadingcounterLocationResults,
    isFetching: isFetchingcounterLocationResults,
  } = useGetCounterLocationQuery(query, {
    skip: filtersSelected.stores.length === 0,
  });

  const {
    data: classificationLocationResults,
    isLoading: isLoadingClassificationLocationResults,
    isFetching: isFetchingClassificationLocationResults,
  } = useGetClassificationLocationQuery(query, {
    skip: filtersSelected.stores.length === 0,
  });
  const categoriesSelected = useAppSelector((state) => state.filters.categories);

  const { data: storesData } = useGetStoresByCategoryQuery(categoriesSelected, {
    skip: categoriesSelected.length === 0,
  });

  const labelsData = getStoreLabels(
    counterLocationResults || defaultFormattedCounterLocationResult,
    storesData || StoresResultDefault,
  );
  const themeContext = useContext(ThemeContext);
  const formatDataHeatmap = formatStore(
    counterLocationResults || defaultFormattedCounterLocationResult,
    storesData || StoresResultDefault,
  );
  const sizeHeatmap: number = formatDataHeatmap.length || 0;

  return (
    <Section title="Objetivos">
      <HeaderContainer>
        <TitleContainer>
          <Title typography="caps1Regular" text="Objetivos por tienda" uppercase />
        </TitleContainer>
      </HeaderContainer>
      <HeatMapContainer>
        <Heatmap
          data={formatDataHeatmap}
          colorScale={rangesColors(counterLocationResults || defaultFormattedDayWeekAverageResult)}
          isLoading={isLoadingcounterLocationResults || isFetchingcounterLocationResults}
          categories={['Entradas', 'Transacciones', 'Tasa de conversión']}
          height={60 * sizeHeatmap}
          dateLabelsFromFilters={[filtersSelected.time.label, filtersSelected.comparison.label]}
        />
      </HeatMapContainer>
      <Tabs title="Entradas" nameButtons={['Clientes', 'Sexo', 'Edad']}>
        <GroupedGraphContainer>
          <GraphBar
            data={classificationLocationResults?.visitors || defaultFormattedHourAverageResult}
            colors={themeContext.graphs.graphBar.bars.clientsLocation}
            labels={labelsData}
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            dateLabelsFromFilter={[filtersSelected.time.label, filtersSelected.comparison.label]}
            horizontal
          />
        </GroupedGraphContainer>
        <GroupedGraphContainer>
          <GroupedGraph
            data={
              classificationLocationResults?.genders || defaultFormattedClassificationHourResult
            }
            optionsData={labelsData}
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            horizontal
            colors={themeContext.graphs.groupedGraph.bars.gender}
            dateLabelFromFilter={filtersSelected.time.label}
          />
        </GroupedGraphContainer>
        <GroupedGraphContainer>
          <GroupedGraph
            data={
              classificationLocationResults?.ageRanges || defaultFormattedClassificationHourResult
            }
            optionsData={labelsData}
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            horizontal
            colors={themeContext.graphs.groupedGraph.bars.ageRange}
            dateLabelFromFilter={filtersSelected.time.label}
          />
        </GroupedGraphContainer>
      </Tabs>
    </Section>
  );
};

export default Locations;

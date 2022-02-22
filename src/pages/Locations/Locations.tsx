import React from 'react';
import { useAppSelector } from '../../config/app/hooks';
import { buildQuery } from '../../helpers/buildEndpoints';
import {
  useGetCounterLocationQuery,
  useGetClassificationLocationQuery,
  useGetStoresByCategoryQuery,
} from '../../features/vicoApi';
import Heatmap from '../../components/organisms/Heatmap';
import GroupedGraph from '../../components/organisms/GroupedGraph';
import {
  CountersContainer,
  HeatMapContainer,
  GroupedGraphContainer,
  TitleContainer,
} from './styled';
import {
  defaultFormattedClassificationHourResult,
  defaultStoreOption,
} from '../../types/graphs/groupedGraph';
import { defaultFormattedDayWeekAverageResult } from '../../types/graphs/heatmap';
import { rangesColors } from '../../helpers/graphsHelpers/heatMap';
import { retrieveOptionName } from '../../helpers/graphsHelpers/groupedGraph';
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

  return (
    <Section title="Objetivos">
      <CountersContainer>
        <TitleContainer>
          <Title typography="caps1Regular" text="Objetivos por tienda" uppercase />
        </TitleContainer>
      </CountersContainer>
      <HeatMapContainer>
        <Heatmap
          data={counterLocationResults || defaultFormattedDayWeekAverageResult}
          colorScale={rangesColors(counterLocationResults)}
          isLoading={isLoadingcounterLocationResults || isFetchingcounterLocationResults}
          categories={
            counterLocationResults
              ? counterLocationResults[0].labels.map((valueClassification) =>
                  retrieveOptionName(
                    valueClassification,
                    storesData?.results || defaultStoreOption,
                  ),
                )
              : [] || []
          }
          height={300}
        />
      </HeatMapContainer>
      <Tabs title="Entradas" nameButtons={['Clientes', 'Sexo', 'Edad']}>
        <GroupedGraphContainer>
          <GroupedGraph
            data={
              classificationLocationResults?.visitors || defaultFormattedClassificationHourResult
            }
            optionsData={
              classificationLocationResults?.labels.map((valueClassification) =>
                retrieveOptionName(valueClassification, storesData?.results || defaultStoreOption),
              ) || []
            }
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            horizontal
            colors={['#FF9F2D', '#168FFF', '#E96FD5']}
          />
        </GroupedGraphContainer>
        <GroupedGraphContainer>
          <GroupedGraph
            data={
              classificationLocationResults?.genders || defaultFormattedClassificationHourResult
            }
            optionsData={
              classificationLocationResults?.labels.map((valueClassification) =>
                retrieveOptionName(valueClassification, storesData?.results || defaultStoreOption),
              ) || []
            }
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            horizontal
            colors={['#ba59aa', '#003566']}
          />
        </GroupedGraphContainer>
        <GroupedGraphContainer>
          <GroupedGraph
            data={
              classificationLocationResults?.ageRanges || defaultFormattedClassificationHourResult
            }
            optionsData={
              classificationLocationResults?.labels.map((valueClassification) =>
                retrieveOptionName(valueClassification, storesData?.results || defaultStoreOption),
              ) || []
            }
            isLoading={
              isLoadingClassificationLocationResults || isFetchingClassificationLocationResults
            }
            horizontal
            colors={['#168fff', '#17cb49', '#ff9f2d', '#f74141', '#e96fd5', '#9b51e0', '#797979']}
          />
        </GroupedGraphContainer>
      </Tabs>
    </Section>
  );
};

export default Locations;

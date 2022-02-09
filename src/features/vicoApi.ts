// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoriesResult, StoresResult } from '../types/filters';
import { CounterResult } from '../types/graphs/counter';
import { FormattedDayWeekAverageResult, DayWeekAverageResult } from '../types/graphs/heatmap';
import { FormattedHourAverageResult, HourAverageResults } from '../types/graphs/graphBar';
import { baseUrl } from '../config/app/constants';
import type { RootState } from '../config/app/store';
import { formatDayWeekAverageResults } from '../helpers/graphsHelpers/heatMap';
import { formatHourAverageResults } from '../helpers/graphsHelpers/graphBar';

// Define a service using a base URL and expected endpoints
export const vicoApi = createApi({
  reducerPath: 'vicoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResult, void>({
      query: () => `categories`,
    }),
    getStoresByCategory: builder.query<StoresResult, string[]>({
      query: (categories) => `stores-categories?categories=${categories.join(',')}`,
    }),
    getCounterData: builder.query<CounterResult, string>({
      query: (queryString) => `/visitors/counter${queryString}`,
    }),
    getDayWeekAverage: builder.query<FormattedDayWeekAverageResult[], string>({
      query: (queryString) => `/visitors/counter-day${queryString}`,
      transformResponse(response: DayWeekAverageResult) {
        return formatDayWeekAverageResults(response);
      },
    }),
    getHourAverage: builder.query<FormattedHourAverageResult[], string>({
      query: (queryString) => `/visitors/counter-hour${queryString}`,
      transformResponse(response: HourAverageResults) {
        return formatHourAverageResults(response);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  useGetStoresByCategoryQuery,
  useGetCounterDataQuery,
  useGetDayWeekAverageQuery,
  useGetHourAverageQuery,
} = vicoApi;

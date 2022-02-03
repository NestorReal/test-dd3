// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoriesResult, StoresResult } from '../types/filters';
import { CounterResult } from '../types/graphs/counter';
import { baseUrl } from '../config/app/constants';
import type { RootState } from '../config/app/store';

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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery, useGetStoresByCategoryQuery, useGetCounterDataQuery } =
  vicoApi;

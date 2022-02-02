/* eslint-disable import/prefer-default-export */

import { FiltersState } from '../../types/filters';

export const buildQuery = (filters: FiltersState): string => {
  const query = '?';
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('from', filters.time.lowDate ? filters.time.lowDate : '');
  urlSearchParams.append('to', filters.time.upDate ? filters.time.upDate : '');
  urlSearchParams.append(
    'compare-from',
    filters.comparison.lowDate ? filters.comparison.lowDate : '',
  );

  urlSearchParams.append('compare-to', filters.comparison.upDate ? filters.comparison.upDate : '');
  urlSearchParams.append('stores', filters.stores.join(','));
  return query + urlSearchParams.toString();
};

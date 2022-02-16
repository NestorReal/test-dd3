// no param reassing is put to enable reassigning state in reducer
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from '../types/filters';
import { conformRanges, TIME_RANGES_ID } from '../helpers/rangeDateHelpers';
import { conformComparations } from '../helpers/compareTimeHelpers';

export const initialState: FiltersState = {
  categories: [],
  stores: [],
  time: conformRanges.preformed[TIME_RANGES_ID.currentMonth],
  comparison: conformComparations[TIME_RANGES_ID.currentMonth][0],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoriesFilter: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setStoresFilter: (state, action: PayloadAction<string[]>) => {
      state.stores = action.payload;
    },
    setTimeFilter: (state, action: PayloadAction<FiltersState['time']>) => {
      state.time = action.payload;
      const timeSelectedId = action.payload.id;
      const compareOptions = conformComparations[timeSelectedId];
      const [defaultOption] = compareOptions;
      state.comparison = defaultOption;
    },
    setComparisonFilter: (state, action: PayloadAction<FiltersState['comparison']>) => {
      state.comparison = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoriesFilter, setStoresFilter, setTimeFilter, setComparisonFilter } =
  filtersSlice.actions;

export default filtersSlice.reducer;

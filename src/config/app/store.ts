import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../../features/api';

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [api.reducerPath]: api.reducer,
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation,
      // polling and other features of `rtk-query`
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
    devTools: true,
  });

export const store = setupStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(setupStore().dispatch);

// Infer  `AppDispatch` type from the store itself
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

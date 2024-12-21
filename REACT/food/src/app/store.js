import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query'
import { foodApi } from '../features/APISlice'

export const store = configureStore({
  reducer: {
   
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
});
setupListeners(store.dispatch)
export default store;
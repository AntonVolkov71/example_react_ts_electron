import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/redux/store/reducers';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

import { combineReducers } from 'redux';
import { testReducer } from '@/redux/store/reducers/test';

export const rootReducer = combineReducers({
  test: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

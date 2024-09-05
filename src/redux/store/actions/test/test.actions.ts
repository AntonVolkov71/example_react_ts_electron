import { Dispatch } from 'react';
import {
  TestActions,
  TestTypes,
} from '@/libs/interface/store/test.store.interface';

export const testActions = (value: string) => {
  return async (dispatch: Dispatch<TestActions>) => {
    try {
      console.log('Здесь асинхронная логика далее добавление в стор');
      dispatch({ type: TestTypes.SET_VALUE, payload: value });
    } catch (e) {
      console.error(e);
    }
  };
};

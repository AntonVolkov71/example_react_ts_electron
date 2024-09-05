import {
  ITestState,
  TestActions,
  TestTypes,
} from '@/libs/interface/store/test.store.interface';

const initialState: ITestState = {
  value: '',
};

export const testReducer = (
  state = initialState,
  action: TestActions,
): ITestState => {
  switch (action.type) {
    case TestTypes.SET_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

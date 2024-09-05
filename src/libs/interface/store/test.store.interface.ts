export interface ITestState {
  value: string;
}

export enum TestTypes {
  SET_VALUE = 'SET_VALUE',
  REMOVE_VALUE = 'REMOVE_VALUE',
}

interface SetTest {
  type: TestTypes.SET_VALUE;
  payload: string;
}

interface RemoveTest {
  type: TestTypes.REMOVE_VALUE;
}

export type TestActions = SetTest | RemoveTest;

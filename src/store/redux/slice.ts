import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    countIncrement: state => {
      state.count = state.count + 1;
    },
    countDecrement: state => {
      state.count = state.count - 1;
    },
  },
});

const appSagaActions = {};

export const AppActions = {
  ...AppSlice.actions,
  ...appSagaActions,
};
export default AppSlice.reducer;

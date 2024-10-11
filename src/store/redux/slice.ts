import {createAction, createSlice} from '@reduxjs/toolkit';
import {AppActionTypes} from './types';

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

const appSagaActions = {
  requestCurrentWeatherData: createAction(
    AppActionTypes.REQUEST_CURRENT_WEATHER,
  ),
};

export const AppActions = {
  ...AppSlice.actions,
  ...appSagaActions,
};
export default AppSlice.reducer;

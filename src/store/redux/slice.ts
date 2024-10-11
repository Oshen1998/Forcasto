import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppActionTypes} from './types';
import {ColorValue} from 'react-native';
import {LightColors} from '../../themes/colors';
import {IWeatherInfo} from '../../features/home/constants/types';

export interface AppState {
  currentWeather: IWeatherInfo;
  colors: {
    fontColor: string | ColorValue;
    backgroundColor: string | ColorValue;
  };
}

const initialState: AppState = {
  currentWeather: {
    clouds: {
      all: 0,
    },
    sys: {
      country: '',
    },
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
    },
    name: '',
    weather: [],
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  },
  colors: {
    backgroundColor: LightColors.Background.MORNING_MODE,
    fontColor: LightColors.Text.PRIMARY,
  },
};

const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setCurrentWeatherInfo: (state, action: PayloadAction<IWeatherInfo>) => {
      state.currentWeather = action.payload;
    },
    updateTheme: (
      state,
      action: PayloadAction<{backgroundColor: string; fontColor: string}>,
    ) => {
      state.colors = action.payload;
    },
  },
});

const appSagaActions = {
  requestCurrentWeatherData: createAction(
    AppActionTypes.REQUEST_CURRENT_WEATHER,
  ),
  reloadCurrentWeatherData: createAction(AppActionTypes.RELOAD_CURRENT_WEATHER),
};

export const AppActions = {
  ...AppSlice.actions,
  ...appSagaActions,
};
export default AppSlice.reducer;

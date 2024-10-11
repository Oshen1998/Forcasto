import {RootState} from '../index';

export const currentWeatherInfoSelector = (state: RootState) =>
  state.general.app.currentWeather;

export const appColorSelector = (state: RootState) => state.general.app.colors;
export const currentLocationSelector = (state: RootState) =>
  state.general.app.location;

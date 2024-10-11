import {takeLatest} from 'typed-redux-saga';
import {AppActions} from '../redux/slice';
import {fetchCurrentWeatherSaga} from './appSaga';

export const AppSaga = [
  takeLatest(AppActions.requestCurrentWeatherData, fetchCurrentWeatherSaga),
];

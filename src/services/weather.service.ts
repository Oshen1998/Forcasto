import Environment from '../configs/environments';
import {IWeatherInfo} from '../features/home/constants/types';
import API from './api.service';

export const WEATHER_APIS = {
  currentWeather: 'weather',
};

export const requestCurrentWeatherDataAPI = (lat: number, lon: number) =>
  API.get<IWeatherInfo>(WEATHER_APIS.currentWeather, {
    params: {
      lat: lat || '6.927079',
      lon: lon || '79.861244',
      appid: Environment.API_KEY,
    },
  });

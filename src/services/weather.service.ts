import Environment from '../configs/environments';
import API from './api.service';

export const WEATHER_APIS = {
  currentWeather: 'weather',
};

export const requestCurrentWeatherDataAPI = () =>
  API.get(`${WEATHER_APIS.currentWeather}`, {
    params: {lat: '6.927079', lon: '79.861244', appid: Environment.API_KEY},
  });

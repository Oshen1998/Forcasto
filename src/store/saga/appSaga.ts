import {call} from 'typed-redux-saga';
import {requestCurrentWeatherDataAPI} from '../../services/weather.service';

export function* fetchCurrentWeatherSaga() {
  try {
    const response = yield* call(requestCurrentWeatherDataAPI);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    //
  }
}

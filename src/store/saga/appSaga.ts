import {call, delay, put, select} from 'typed-redux-saga';
import {requestCurrentWeatherDataAPI} from '../../services/weather.service';
import {AppActions} from '../redux/slice';
import {
  hideAllBottomSheets,
  openBottomSheet,
  showGeneralErrorNotify,
} from '../../utils/modal.utils';
import {MODAL_STACK} from '../../modal/constants';
import {ILoader} from '../../modal/modal.types';
import {AxiosError} from 'axios';
import {currentLocationSelector} from '../redux/selector';

const showError = showGeneralErrorNotify?.();
const showLoader = openBottomSheet<{payload: ILoader}>(MODAL_STACK.LOADER, {
  payload: {
    description:
      "Please hold on for just a moment. We're processing your request.",
  },
});
const hideAll = hideAllBottomSheets?.();

export function* fetchCurrentWeatherSaga() {
  try {
    const {lat, lon} = yield* select(currentLocationSelector);
    const response = yield* call(requestCurrentWeatherDataAPI, lat, lon);
    yield* put(AppActions.setCurrentWeatherInfo(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      showError();
    }
  }
}

export function* reloadCurrentWeatherSaga() {
  try {
    showLoader();
    const {lat, lon} = yield* select(currentLocationSelector);
    const response = yield* call(requestCurrentWeatherDataAPI, lat, lon);
    yield* put(AppActions.setCurrentWeatherInfo(response.data));
    // No Need the Loader
    // Just add to show the bottomSheet Loader
    yield* delay(2000);
    hideAll();
  } catch (error) {
    if (error instanceof AxiosError) {
      showError();
    }
  }
}

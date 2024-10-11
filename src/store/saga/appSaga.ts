import {call, delay, put} from 'typed-redux-saga';
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
    const response = yield* call(requestCurrentWeatherDataAPI);
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
    const response = yield* call(requestCurrentWeatherDataAPI);
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

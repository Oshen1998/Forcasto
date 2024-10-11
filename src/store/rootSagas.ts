import {all} from 'redux-saga/effects';
import {AppSaga} from './saga';

export default function* rootSaga() {
  /**
   * List down sagas in the app. Since baseApp does not have any sagas, it will return
   * an empty array.
   */
  yield all([...AppSaga]);
}

import {combineReducers, UnknownAction, Reducer} from '@reduxjs/toolkit';
import AppSlice, {AppState} from './redux/slice';

export type ICombinedReducer = {
  app: AppState;
};

const rootReducer: Reducer<ICombinedReducer, UnknownAction> = combineReducers({
  app: AppSlice,
});

export default rootReducer;

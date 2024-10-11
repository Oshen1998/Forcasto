import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const Configs = {
  key: 'root',
  storage,
  // blacklist: ['general'], // Blacklisting the 'general' slice to prevent persistence
};

// Combine reducers
const combinedReducer = combineReducers({
  general: rootReducer,
});

// Persist the combined reducer with blacklist
const persistedReducer = persistReducer(Configs, combinedReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Persistor for managing the persistence
export const persistor = persistStore(store);

// Type definitions for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

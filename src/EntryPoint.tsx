import React, {useEffect} from 'react';
import {useAppDispatch} from './hooks/useRedux';
import {AppActions} from './store/redux/slice';
import BootSplash from 'react-native-bootsplash';
import HomeScreen from './features/home/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import {showGeneralErrorNotify} from './utils/modal.utils';

const EntryPoint = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      Geolocation.getCurrentPosition(
        info => {
          dispatch(
            AppActions.setCoordinates({
              lat: info.coords?.latitude,
              lon: info.coords?.longitude,
            }),
          );
        },
        error => {
          showGeneralErrorNotify?.();
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    init().finally(async () => {
      dispatch(AppActions.requestCurrentWeatherData());
      await BootSplash.hide({fade: true});
    });
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default EntryPoint;

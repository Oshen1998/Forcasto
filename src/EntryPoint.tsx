import React, {useEffect} from 'react';
import {useAppDispatch} from './hooks/useRedux';
import {AppActions} from './store/redux/slice';
import BootSplash from 'react-native-bootsplash';
import HomeScreen from './features/home/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const EntryPoint = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      dispatch(AppActions.requestCurrentWeatherData());
    };

    init().finally(async () => {
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

import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import EntryPoint from '../EntryPoint';
import HomeScreen from '../features/home/HomeScreen';

export enum STACK_SCREENS {
  ROUTER = 'ROUTER',
  HOME = 'HOME',
}

export type RootStackNavigatorParamsList = {
  [STACK_SCREENS.ROUTER]: undefined;
  [STACK_SCREENS.HOME]: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

const NavigationStack = () => {
  const getOptions = () =>
    ({
      headerShown: false,
    } as StackNavigationOptions);

  return (
    <Stack.Navigator
      initialRouteName={STACK_SCREENS.ROUTER}
      screenOptions={getOptions}>
      <Stack.Screen name={STACK_SCREENS.ROUTER} component={EntryPoint} />
      <Stack.Screen name={STACK_SCREENS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;

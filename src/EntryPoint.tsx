import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import {AppActions} from './store/redux/slice';
import {useAppSelector} from './hooks/useRedux';
import {countValueSelector} from './store/redux/selector';
import {STACK_SCREENS} from './navigation/NavigationStack';
import navigationService from './navigation/navigationService';

const EntryPoint = () => {
  //   const dispatch = useAppDispatch();
  const count = useAppSelector(countValueSelector);

  const onHandlePressCount = () => {
    // dispatch(AppActions.countIncrement());
    navigationService.navigate(STACK_SCREENS.HOME);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AppEntry: {count}</Text>
      <TouchableOpacity
        onPress={onHandlePressCount}
        style={{
          backgroundColor: 'pink',
          width: '90%',
          marginHorizontal: 15,
          padding: 15,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EntryPoint;

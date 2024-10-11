import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {STACK_SCREENS} from '../../navigation/NavigationStack';
import navigationService from '../../navigation/navigationService';

const HomeScreen = () => {
  const onHandlePressCount = () => {
    navigationService.navigate(STACK_SCREENS.ROUTER);
  };

  return (
    <View>
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

export default HomeScreen;

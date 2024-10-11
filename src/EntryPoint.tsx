import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
// import {AppActions} from './store/redux/slice';
import {useAppDispatch, useAppSelector} from './hooks/useRedux';
import {countValueSelector} from './store/redux/selector';
import AppText from './components/text/AppText';
import {FONT_FAMILIES, FONT_SIZES} from './themes/fonts';
import {LightColors} from './themes/colors';
import {openBottomSheet} from './utils/modal.utils';
import {MODAL_STACK} from './modal/constants';
import {ILoader} from './modal/modal.types';
import {AppActions} from './store/redux/slice';
import BootSplash from 'react-native-bootsplash';

const EntryPoint = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(countValueSelector);

  useEffect(() => {
    const init = async () => {
      dispatch(AppActions.requestCurrentWeatherData());
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, [dispatch]);

  const onHandlePressCount = openBottomSheet<{payload: ILoader}>(
    MODAL_STACK.LOADER,
    {
      payload: {
        title: 'Loading...',
        description:
          "Please hold on for just a moment. We're processing your request.",
      },
    },
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text
        style={{
          fontFamily: FONT_FAMILIES.Manrope.Bold,
          fontSize: FONT_SIZES.Subtitle,
        }}>
        AppEntry: {count}
      </Text> */}
      <AppText
        textAlign="center"
        fontFamily={FONT_FAMILIES.Manrope.Bold}
        fontSize={FONT_SIZES.MediumTitle}
        fontColor={LightColors.Text.ERROR}>
        AppEntry: {count}
      </AppText>
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

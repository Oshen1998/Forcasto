import {
  ColorValue,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {currentWeatherInfoSelector} from '../../store/redux/selector';
import AppText from '../text/AppText';
import {LightColors} from '../../themes/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../themes/images';
import {FONT_FAMILIES, FONT_SIZES} from '../../themes/fonts';
import {AppActions} from '../../store/redux/slice';
import {openBottomSheet} from '../../utils/modal.utils';
import {INotify} from '../../modal/modal.types';
import {MODAL_STACK} from '../../modal/constants';

export type HeaderProps = {
  colors: {
    backgroundColor: string | ColorValue;
    fontColor: string | ColorValue;
  };
};

const Header = ({colors}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const {name, sys} = useAppSelector(currentWeatherInfoSelector);

  // Hope to develop map integration part
  // user can select the location through the map
  const onHandlePressLocation = openBottomSheet<{payload: INotify}>(
    MODAL_STACK.NOTIFY,
    {
      payload: {
        title: 'Coming Soon!',
        animationKey: 'MAINTENANCE',
        description:
          "Thank you for your interest! Our app is in development, and we're excited to bring you an amazing experience soon. Stay tuned for the official release!",
      },
    },
  );

  const onHandlePressReload = useCallback(() => {
    dispatch(AppActions.reloadCurrentWeatherData());
  }, [dispatch]);

  return (
    <View style={[styles.container, {paddingTop: insets.top + 20}]}>
      <StatusBar translucent backgroundColor={LightColors.TRANSPARENT} />
      <TouchableOpacity
        onPress={onHandlePressLocation}
        style={styles.searchLocation}>
        <Image
          source={images.icons.location}
          resizeMode="contain"
          style={[styles.location, {tintColor: colors.fontColor}]}
        />
        <AppText
          textAlign="left"
          style={[styles.headerText, {color: colors.fontColor}]}>
          {name} ({sys.country})
        </AppText>
        <Image
          source={images.icons.chevron}
          resizeMode="contain"
          style={[styles.chevron, {tintColor: colors.fontColor}]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onHandlePressReload}
        style={styles.searchLocation}>
        <Image
          source={images.icons.reload}
          resizeMode="contain"
          style={[styles.reload, {tintColor: colors.fontColor}]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontSize: FONT_SIZES.MediumTitle,
    fontFamily: FONT_FAMILIES.Manrope.SemiBold,
  },
  searchLocation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  location: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  chevron: {
    height: 35,
    width: 35,
    marginTop: 5,
  },
  reload: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
});

export default memo(Header);

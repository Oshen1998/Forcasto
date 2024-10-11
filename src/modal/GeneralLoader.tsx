import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ModalComponentProp} from 'react-native-modalfy';
import {MODAL_STACK} from './constants';
import {ModalStackParams} from './modal.types';
import {deviceHeight, deviceWidth} from '../utils/device.utils';
import {LightColors} from '../themes/colors';
import {FONT_FAMILIES, FONT_SIZES} from '../themes/fonts';
import AppLottie from '../components/lottier/AppLottie';
import {animations} from '../themes/animations';
import AppText from '../components/text/AppText';

type LoaderModalProps = ModalComponentProp<
  ModalStackParams,
  void,
  MODAL_STACK.LOADER
>;

const GeneralLoader = ({modal}: LoaderModalProps) => {
  const {params} = modal;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: LightColors.Background.PRIMARY},
      ]}
      renderToHardwareTextureAndroid>
      <View style={styles.animationContainer}>
        <AppLottie source={animations.cloudLoading} height={150} width={150} />
      </View>
      <AppText
        testId="general-loader-id"
        textAlign="center"
        style={styles.desc}
        numberOfLines={2}>
        {params?.payload?.description ?? ''}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 15,
    overflow: 'hidden',
    width: deviceWidth,
    maxHeight: deviceHeight * 0.6,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontFamily: FONT_FAMILIES.Manrope.SemiBold,
    fontSize: FONT_SIZES.Subtitle,
    textAlign: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: '100%',
  },
  desc: {
    marginVertical: 10,
    fontFamily: FONT_FAMILIES.Manrope.Medium,
    fontSize: FONT_SIZES.Caption,
    textAlign: 'center',
    color: LightColors.Text.DESCRIPTION,
  },
});

export default GeneralLoader;

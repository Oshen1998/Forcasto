import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ModalComponentProp} from 'react-native-modalfy';
import {MODAL_STACK} from './constants';
import {ModalStackParams} from './modal.types';
import {deviceWidth} from '../utils/device.utils';
import {LightColors} from '../themes/colors';
import {FONT_FAMILIES, FONT_SIZES} from '../themes/fonts';
import AppLottie from '../components/lottier/AppLottie';
import {animations} from '../themes/animations';
import AppText from '../components/text/AppText';

type NotifyModalProps = ModalComponentProp<
  ModalStackParams,
  void,
  MODAL_STACK.NOTIFY
>;

const Notify = ({modal}: NotifyModalProps) => {
  const {params} = modal;

  const animationLottie = useMemo(() => {
    if (params?.payload.animationKey) {
      const key = params?.payload.animationKey;
      if (key === 'MAINTENANCE') {
        return animations.underDev;
      }
    }
    return animations.warning;
  }, [params?.payload.animationKey]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: LightColors.Background.PRIMARY},
      ]}
      renderToHardwareTextureAndroid>
      <View style={styles.animationContainer}>
        <AppLottie source={animationLottie} height={150} width={150} />
      </View>
      <AppText textAlign="center" style={styles.title} numberOfLines={2}>
        {params?.payload?.title ?? ''}
      </AppText>
      <AppText textAlign="center" style={styles.desc} numberOfLines={4}>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontFamily: FONT_FAMILIES.Manrope.Bold,
    fontSize: FONT_SIZES.SmallTitle,
    textAlign: 'center',
    color: LightColors.Text.PRIMARY,
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

export default Notify;

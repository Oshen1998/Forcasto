import {
  View,
  StyleSheet,
  ColorValue,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {memo} from 'react';
import AppText from '../../../components/text/AppText';
import {FONT_FAMILIES, FONT_SIZES} from '../../../themes/fonts';

type ContentProps = {
  value: string | number;
  title: string;
  fontColor: string | ColorValue;
  icon?: ImageSourcePropType;
};

const Content = ({title, value, fontColor, icon}: ContentProps) => {
  return (
    <View style={style.container}>
      <Image
        source={icon}
        style={[style.icon, {tintColor: fontColor}]}
        resizeMode="contain"
      />
      <AppText
        textAlign="center"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[style.extraInfo, {color: fontColor}]}>
        {`${title} | ${value}`}
      </AppText>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  extraInfo: {
    fontFamily: FONT_FAMILIES.Manrope.Regular,
    fontSize: FONT_SIZES.Subtitle,
  },
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export default memo(Content);

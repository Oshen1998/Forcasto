import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import {FONT_FAMILIES} from '../../themes/fonts';

type AppTextProps = {
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium';
  fontFamily?: string;
  fontSize?: number;
  fontColor?: ColorValue;
  textAlign: 'center' | 'left' | 'right';
  children: any;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  style?: StyleProp<TextStyle>;
};

const AppText = ({
  fontColor = '#000000',
  fontSize = 12,
  fontWeight = '300',
  fontFamily = FONT_FAMILIES.Manrope.Medium,
  children = '',
  textAlign = 'left',
  numberOfLines = 1,
  ellipsizeMode = 'tail',
  style,
}: AppTextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={
        style || {
          color: fontColor,
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textAlign: textAlign,
        }
      }>
      {children}
    </Text>
  );
};

export default AppText;

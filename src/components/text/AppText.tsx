import {ColorValue, Text} from 'react-native';
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
};

const AppText = ({
  fontColor = '#000000',
  fontSize = 12,
  fontWeight = '300',
  fontFamily = FONT_FAMILIES.Manrope.Medium,
  children = '',
  textAlign = 'left',
}: AppTextProps) => {
  return (
    <Text
      style={{
        color: fontColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: textAlign,
      }}>
      {children}
    </Text>
  );
};

export default AppText;

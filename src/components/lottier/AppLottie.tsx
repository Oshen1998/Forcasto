import React from 'react';
import LottieView from 'lottie-react-native';

export type AppLottieProps = {
  source: string;
  height: number;
  width: number;
};

const AppLottie = (props: AppLottieProps) => {
  const {source, height, width} = props;
  return (
    <LottieView
      testID="lottie"
      source={source}
      autoPlay
      loop
      style={{height: height, width: width}}
    />
  );
};

export default AppLottie;

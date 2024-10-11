import {Animated, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export const slideFromBottomAnimation = (animatedValue: Animated.Value) => ({
  opacity: animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0.9],
  }),
  transform: [
    {
      translateY: animatedValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [height, 0, 0],
        extrapolate: 'clamp',
      }),
    },
  ],
});

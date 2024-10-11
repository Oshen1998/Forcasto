import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-gesture-handler', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

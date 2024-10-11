import {ImageSourcePropType} from 'react-native';

export const images = {
  backgrounds: {
    //
  },
  weather: {
    lighteningWithRain:
      require('../assets/images/rainWIthThunder/img.png') as ImageSourcePropType,
  },
  icons: {
    location:
      require('../assets/icons/location/icon.png') as ImageSourcePropType,
    chevron: require('../assets/icons/chevron/icon.png') as ImageSourcePropType,
    reload: require('../assets/icons/reload/icon.png') as ImageSourcePropType,
    sunny: require('../assets/icons/sun/icon.png') as ImageSourcePropType,
    moon: require('../assets/icons/moon/icon.png') as ImageSourcePropType,
    rainyNight:
      require('../assets/icons/rain_night/icon.png') as ImageSourcePropType,
    rainyDay:
      require('../assets/icons/rain_day/Rainy.png') as ImageSourcePropType,
    snowNight:
      require('../assets/icons/snow_night/icon.png') as ImageSourcePropType,
    snowDay:
      require('../assets/icons/snow_day/Snowy.png') as ImageSourcePropType,
    humidity:
      require('../assets/icons/humidity/icon.png') as ImageSourcePropType,
    wind: require('../assets/icons/wind/icon.png') as ImageSourcePropType,
  },
};

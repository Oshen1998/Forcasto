import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {images} from '../../themes/images';
import {LightColors} from '../../themes/colors';
import Header from '../../components/header/Header';
import AppText from '../../components/text/AppText';
import {kelvinToCelsius} from '../../utils/formulas.utils';
import {FONT_FAMILIES, FONT_SIZES} from '../../themes/fonts';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {
  appColorSelector,
  currentWeatherInfoSelector,
} from '../../store/redux/selector';
import {AppActions} from '../../store/redux/slice';
import {capitalize} from 'lodash';
import {getTodayFormatted} from '../../utils/date.utils';
import {ICON_CODES} from './constants';
import CustomBlurCard from './components/CustomBlurCard';
import Content from './components/Content';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector(appColorSelector);
  const {weather, main, wind} = useAppSelector(currentWeatherInfoSelector);
  const [refreshing, setRefreshing] = useState(false);
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  useEffect(() => {
    if (currentHour >= 6 && currentHour < 12) {
      // 6 AM to 12 PM
      dispatch(
        AppActions.updateTheme({
          backgroundColor: LightColors.Background.MORNING_MODE,
          fontColor: LightColors.Text.PRIMARY,
        }),
      );
    } else if (currentHour >= 12 && currentHour < 18) {
      // 12 PM to 6 PM
      dispatch(
        AppActions.updateTheme({
          backgroundColor: LightColors.Background.NOON_MODE,
          fontColor: LightColors.Text.PRIMARY,
        }),
      );
    } else {
      dispatch(
        AppActions.updateTheme({
          backgroundColor: LightColors.Background.NIGHT_MODE,
          fontColor: LightColors.Text.ACCENT,
        }),
      );
    }
  }, [currentHour, dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(AppActions.reloadCurrentWeatherData());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const changeImage = useMemo(() => {
    if (weather && weather.length > 0) {
      const iconCode = weather[0]?.icon ?? '01d';
      if (iconCode === ICON_CODES.CLEAR_DAY) {
        return images.icons.sunny;
      } else if (iconCode === ICON_CODES.CLEAR_NIGHT) {
        return images.icons.moon;
      } else if (
        iconCode === ICON_CODES.RAIN_NIGHT ||
        iconCode === ICON_CODES._RAIN_NIGHT
      ) {
        return images.icons.rainyNight;
      } else if (
        iconCode === ICON_CODES.RAIN_DAY ||
        iconCode === ICON_CODES._RAIN_DAY
      ) {
        return images.icons.rainyDay;
      } else if (iconCode === ICON_CODES.SNOW_DAY) {
        return images.icons.snowDay;
      } else if (iconCode === ICON_CODES.SNOW_NIGHT) {
        return images.icons.snowNight;
      } else {
        return images.icons.sunny;
      }
    }
  }, [weather]);

  const temperature = useMemo(() => kelvinToCelsius(299), []);

  const today = useMemo(() => getTodayFormatted(), []);

  return (
    <View style={[style.container, {backgroundColor: colors.backgroundColor}]}>
      <Header colors={colors} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scroll}>
        <View style={style.imageContainer}>
          <Image
            source={changeImage ?? images.icons.sunny}
            style={style.img}
            resizeMode="contain"
          />
        </View>
        <AppText
          testId="home-today"
          textAlign="center"
          style={[style.description, {color: colors.fontColor}]}>
          {today}
        </AppText>
        <AppText
          testId="home-temperature"
          textAlign="center"
          style={[style.temperature, {color: colors.fontColor}]}>
          {temperature} C°
        </AppText>
        <AppText
          testId="home-weather"
          textAlign="center"
          style={[style.description, {color: colors.fontColor}]}>
          {capitalize(weather[0]?.main) ?? ''}
        </AppText>
        <CustomBlurCard style={style.customCard}>
          <Content
            title="Humidity"
            value={`${main.humidity} %`}
            fontColor={colors.fontColor}
            icon={images.icons.humidity}
          />
          <Content
            title="Wind Speed"
            value={`${wind.speed} Km/h`}
            icon={images.icons.wind}
            fontColor={colors.fontColor}
          />
        </CustomBlurCard>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    marginVertical: 40,
  },
  img: {
    height: 250,
    width: 250,
  },
  temperature: {
    fontFamily: FONT_FAMILIES.Manrope.Bold,
    fontSize: FONT_SIZES.SuperTitle,
    fontWeight: '500',
  },
  description: {
    fontFamily: FONT_FAMILIES.Manrope.SemiBold,
    fontSize: FONT_SIZES.Subtitle,
  },
  customCard: {
    marginVertical: 40,
    width: '90%',
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default HomeScreen;

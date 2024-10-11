export type IWeather = {
  id: 501;
  main: string;
  description: string;
  icon: string;
};

export interface IWeatherInfo {
  weather: IWeather[];
  name: string; // location name
  sys: {
    country: string;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
}

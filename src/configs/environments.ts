import Config from 'react-native-config';

interface IEnvironment {
  API_BASE_URL: string;
  API_KEY: string;
}

const Environment: IEnvironment = {
  API_BASE_URL: Config.API_BASE_URL ?? '',
  API_KEY: Config.API_KEY ?? '',
};

export default Environment;

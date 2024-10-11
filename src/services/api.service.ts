import axios, {AxiosError, AxiosResponse, HttpStatusCode} from 'axios';
import Logger from './logger.service';
import Environment from '../configs/environments';

interface AppResponse extends Response {
  list: unknown;
}

const API = axios.create({
  baseURL: Environment.API_BASE_URL,
});

const successResponseHandler = (response: AxiosResponse<AppResponse>) => {
  Logger.responseSuccess({
    url:
      response.config?.baseURL && response.config?.url
        ? `${response.config?.baseURL}${response.config?.url}`
        : '',
    responseBody: response.data,
    requestBody: response.config?.data,
    headers: response.config?.headers,
    params: response.config?.params,
    method: response.config?.method,
    statusCode: response.status,
  });

  return Promise.resolve({
    ...response,
    data: response.data,
  });
};

const errorResponseHandler = (error: unknown) => {
  const axiosError = error as AxiosError;

  Logger.responseError({
    url:
      axiosError.response?.config?.baseURL && axiosError.response?.config?.url
        ? `${axiosError.response?.config?.baseURL}${axiosError.response?.config?.url}`
        : '',
    responseBody: axiosError.response?.data,
    requestBody: axiosError.response?.config?.data,
    headers: axiosError.response?.config?.headers,
    method: axiosError.response?.config?.method,
    statusCode: axiosError.response?.status,
  });

  if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
    // if unauthorized
  }

  return Promise.reject(error);
};

API.interceptors.request.use(config => {
  if (Environment.API_KEY) {
    if (config.headers['x-skip-base-url']) {
      delete config.headers['x-skip-base-url'];
    }

    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    Logger.request({
      url: `${Environment.API_BASE_URL}${config?.url ?? ''}`,
      requestBody: config.data,
      headers: config.headers,
      method: config.method,
      params: config.params,
    });
  }

  return config;
});

API.interceptors.response.use(successResponseHandler, errorResponseHandler);

export default API;

const SHOW_LOGS = true;

const request = ({
  url,
  method,
  headers,
  params,
  requestBody,
}: {
  url: string;
  method?: string;
  headers: unknown;
  params: unknown;
  requestBody: unknown;
}) => {
  if (SHOW_LOGS && __DEV__) {
    console.info(
      '\x1b[34m',
      '\n\n************ REQUEST ************\n',
      '\nURL :',
      url,
      '\nMethod:',
      method,
      '\nHeaders:',
      headers,
      '\nParams:',
      params,
      '\nBody:',
      JSON.stringify(requestBody, null, 2),
      '\n\n*********************************',
      '\x1b[37m',
    );
  }
};

const responseSuccess = ({
  url,
  method,
  headers,
  params,
  responseBody,
  requestBody,
}: {
  url: string;
  method?: string;
  headers?: unknown;
  params?: unknown;
  responseBody?: unknown;
  requestBody?: unknown;
  reason?: string;
  statusCode?: number;
}) => {
  if (SHOW_LOGS && __DEV__) {
    console.info(
      '\x1b[92m',
      '\n\n************ SUCCESS RESPONSE ************\n',
      '\nURL :',
      url,
      '\nMethod:',
      method,
      '\nParams:',
      params,
      '\nHeaders:',
      headers,
      '\nRequest Body:',
      JSON.stringify(requestBody, null, 2),
      '\nResponse Body:',
      JSON.stringify(responseBody, null, 2),
      '\n\n*********************************',
      '\x1b[92m',
    );
  }
};

const responseError = ({
  url,
  method,
  headers,
  responseBody,
  requestBody,
  statusCode,
}: {
  url: string;
  method?: string;
  headers?: unknown;
  responseBody?: unknown;
  requestBody?: unknown;
  reason?: string;
  statusCode?: number;
}) => {
  if (SHOW_LOGS && __DEV__) {
    console.info(
      '\x1b[91m',
      '\n\n************ ERROR RESPONSE ************\n',
      '\nURL :',
      url,
      '\nMethod:',
      method,
      '\nHeaders:',
      headers,
      '\nStatus:',
      statusCode,
      '\nRequest Body:',
      JSON.stringify(requestBody, null, 2),
      '\nResponse Body:',
      JSON.stringify(responseBody, null, 2),
      '\n\n*********************************',
      '\x1b[37m',
    );
  }
};

const Logger = {
  request,
  responseSuccess,
  responseError,
};

export default Logger;

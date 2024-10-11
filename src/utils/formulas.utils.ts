export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return ((fahrenheit - 32) * 5) / 9;
};
export const kelvinToCelsius = (kelvin: number): number => {
  return Number((kelvin - 273.15).toFixed(0));
};

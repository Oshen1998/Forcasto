export const getTodayFormatted = (): string => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', {month: 'long'});

  return `${day} ${month}, ${today.getFullYear()}`;
};

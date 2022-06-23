export const convertRemToPx = (value: string) => {
  const baseFontSize = 16;
  const unitRem = parseFloat(value);
  return unitRem * baseFontSize;
};

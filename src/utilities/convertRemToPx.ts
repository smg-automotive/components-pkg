export const convertRemToPx = (value: string) => {
  const unitRem = parseFloat(value);
  return unitRem / 0.0625;
};

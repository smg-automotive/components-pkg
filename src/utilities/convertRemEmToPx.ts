export const convertRemEmToPx = (value: string) => {
  const baseFontSize = 16;
  const unitRemEm = parseFloat(value);
  return unitRemEm * baseFontSize;
};

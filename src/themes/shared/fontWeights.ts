export const fontWeights = {
  regular: 400,
  bold: 700,
};

export type FontWeights = Exclude<keyof typeof fontWeights, undefined>;

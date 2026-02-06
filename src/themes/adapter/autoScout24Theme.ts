import { colors } from '../shared/tokens/colors';

type ColorKey = keyof typeof colors;

type OldStructureColors = {
  [K in ColorKey]: K extends 'white' | 'black'
    ? string
    : Record<number, string>;
};

const oldStructureColors = Object.keys(colors).reduce((acc, colorKey) => {
  const key = colorKey as ColorKey;
  const colorValue = colors[key];
  if ('value' in colorValue && typeof colorValue.value === 'string') {
    (acc[key] as string) = colorValue.value;
  } else {
    Object.keys(colorValue).forEach((shadeKey) => {
      const shadeValue = (colorValue as Record<string, { value: string }>)[
        shadeKey
      ];
      if ('value' in shadeValue && typeof shadeValue.value === 'string') {
        const colorKeyObj =
          typeof acc[key] === 'object' && acc[key] !== null
            ? (acc[key] as Record<number, string>)
            : {};
        (acc[key] as Record<number, string>) = {
          ...colorKeyObj,
          [shadeKey]: shadeValue.value,
        };
      }
    });
  }

  return acc;
}, {} as OldStructureColors);

export const autoScout24Theme = { colors: oldStructureColors };

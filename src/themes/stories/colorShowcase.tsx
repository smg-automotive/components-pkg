import React, { FC } from 'react';
import { ColorItem } from '@storybook/addon-docs';
import { useTheme } from '@chakra-ui/react';

// Not exported form the storybook addon
type Colors =
  | string[]
  | {
      [key: string]: string;
    };

const ColorShowcase: FC = () => {
  const theme = useTheme();
  const colors = Object.entries(theme.colors);

  return (
    <>
      {colors.map(([colorName, colorValues]) => {
        const mappedValues =
          typeof colorValues === 'object'
            ? (colorValues as Colors)
            : { [colorName]: colorValues as string };

        return (
          <ColorItem
            subtitle=""
            key={colorName}
            title={colorName}
            colors={mappedValues}
          />
        );
      })}
    </>
  );
};

export default ColorShowcase;

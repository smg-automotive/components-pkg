import React, { FC } from 'react';
import { ColorItem } from '@storybook/addon-docs';
import { useChakraContext } from '@chakra-ui/react';

const ColorShowcase: FC = () => {
  const context = useChakraContext();
  const colors = context._config.theme?.tokens?.colors || {};

  return (
    <>
      {Object.entries(colors).map(([colorName, colorToken]) => {
        const mappedValues =
          'value' in colorToken
            ? { [colorName]: colorToken.value.toString() }
            : Object.fromEntries(
                Object.entries(colorToken).map(([shade, shadeValue]) => [
                  shade,
                  shadeValue.value.toString(),
                ]),
              );

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

import React, { FC } from 'react';
import { Button, Flex, Text, useTheme } from '@chakra-ui/react';

const BorderRadiusShowcase: FC = () => {
  const theme = useTheme();

  return (
    <Flex justify="space-between">
      {Object.entries(theme.radii).map(([name, radii]) => {
        return (
          <Flex direction="column" alignItems="center" key={name}>
            <Button
              background="brand.primary"
              size="lg"
              borderRadius={radii as string}
            >
              {name}
            </Button>
            <Text mt="xs">{radii as string}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BorderRadiusShowcase;

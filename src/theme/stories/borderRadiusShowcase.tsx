import React, { FC } from 'react';
import { Button, Flex, Text, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const BorderRadiusShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Flex direction="column" alignItems="center">
      <Button
        background={theme.colors.brand.primary}
        size="lg"
        borderRadius={theme.radii[name]}
      >
        {name}
      </Button>
      <Text mt={2}>{theme.radii[name]}</Text>
    </Flex>
  );
};

export default BorderRadiusShowcase;

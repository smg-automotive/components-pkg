import React, { FC } from 'react';

import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

const OpacityShowcase: FC = () => {
  const theme = useTheme();

  return (
    <Flex justify="space-between">
      {Object.entries(theme.opacity).map(([name, opacity]) => {
        return (
          <Box
            key={name}
            bg="gray.900"
            h={100}
            w={100}
            borderRadius="max"
            opacity={opacity as string}
          >
            <Text mt="3xl" color="white" textAlign="center">
              {`${name}%`}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default OpacityShowcase;

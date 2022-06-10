import React, { FC } from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

const ShadowShowcase: FC = () => {
  const theme = useTheme();

  return (
    <Flex justify="space-between">
      {Object.entries(theme.shadows).map(([name, shadow]) => {
        return (
          <Box
            key={name}
            m={10}
            w={100}
            h={100}
            shadow={shadow as string}
            border="1px"
            borderColor="gray.300"
          >
            <Text align="center">{name}</Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default ShadowShowcase;

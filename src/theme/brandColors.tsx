import React, { FC } from 'react';
import { Box, Flex, Heading, useTheme } from '@chakra-ui/react';

const PrimaryColors: FC = () => {
  const theme = useTheme();
  return (
    <Flex direction="column" align="center" justify="left" wrap="wrap">
      <Heading as="h2" size="lg" mb={10}>
        Brand Colors
      </Heading>
      <Flex direction="row" align="center" justify="left" mr={5}>
        {[
          '50',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ].map((shade) => {
          return (
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              key={`brand-${shade}`}
            >
              <Box
                bg={theme.colors.brand[shade]}
                h={50}
                w={50}
                mr={3}
                mb={3}
                borderRadius={50}
                borderWidth={1}
                borderStyle="solid"
                borderColor="gray.500"
              />
              <Box w={100}>{`brand-${shade}`}</Box>
              <Box w={100}>{Object.values(theme.colors.brand[shade])}</Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default PrimaryColors;

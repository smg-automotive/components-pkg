import React, { FC } from 'react';

import { Box, Text, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const OpacityShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Box
      bg="gray.900"
      h={50}
      w={50}
      m={50}
      borderRadius="max"
      opacity={theme.opacity[name]}
    >
      <Text mt={3} color="white" textAlign="center">
        {`${name}%`}
      </Text>
    </Box>
  );
};

export default OpacityShowcase;

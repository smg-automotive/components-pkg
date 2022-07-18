import React, { FC, ReactNode } from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  title: string;
  text?: string;
  bild?: ReactNode;
}

const Section: FC<Props> = ({ title, text, bild }) => {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing="xl"
      align={{ xs: 'center', lg: 'start' }}
    >
      <Box>{bild}</Box>
      <Box>
        <Heading textStyle="heading1">{title}</Heading>
        <Text textStyle="body-large" mt="md">
          {text}
        </Text>
      </Box>
    </Stack>
  );
};

export default Section;

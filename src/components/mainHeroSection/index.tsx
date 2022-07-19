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
      align={{ xs: 'center', lg: 'baseline' }}
    >
      {bild ? <Box>{bild}</Box> : null}
      <Stack spacing="md">
        <Heading textStyle="heading1">{title}</Heading>
        {text ? <Text textStyle="body-large">{text}</Text> : null}
      </Stack>
    </Stack>
  );
};

export default Section;

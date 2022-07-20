import React, { FC, ReactNode } from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  variant?: 'hero';
  title: string;
  text?: string;
  image?: () => ReactNode;
}

const Section: FC<Props> = ({ title, text, image, variant = 'hero' }) => {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing="xl"
      align={{ xs: 'center', lg: 'baseline' }}
    >
      {variant === 'hero' && image ? <Box>{image()}</Box> : null}
      <Stack spacing="md">
        <Heading textStyle="heading1">{title}</Heading>
        {text ? <Text textStyle="body-large">{text}</Text> : null}
      </Stack>
    </Stack>
  );
};

export default Section;

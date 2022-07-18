import React, { FC, ReactNode } from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  title: string;
  text?: string;
  icon?: ReactNode;
}

const Section: FC<Props> = ({ title, text, icon }) => {
  return (
    <Stack>
      <Box height="full" width="full">
        {icon}
      </Box>
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

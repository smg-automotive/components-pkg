import React, { createElement } from 'react';
import { Box, Center } from '@chakra-ui/react';

import SimpleGrid from '../simpleGrid';

import * as AllIcons from './index';

const Template = () => {
  return (
    <SimpleGrid columns={6} spacing="lg">
      {Object.keys(AllIcons)
        .sort()
        .map((icon, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            p="md"
          >
            <Center>{createElement(AllIcons[icon])}</Center>
            <Center>
              <p>{icon}</p>
            </Center>
          </Box>
        ))}
    </SimpleGrid>
  );
};

export default {
  title: 'Foundations/Icons',

  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const Icons = {
  render: Template.bind({}),
  name: 'Icons',
};

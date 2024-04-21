import React, { createElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Primary, Subtitle, Title } from '@storybook/blocks';
import { Box, Center, Text } from '@chakra-ui/react';

import SimpleGrid from '../simpleGrid';

import * as AllIcons from './index';

const Template = () => {
  return (
    <SimpleGrid columns={6} spacing="lg">
      {(Object.keys(AllIcons) as Array<keyof typeof AllIcons>)
        .sort()
        .map((icon, index) => {
          return (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              borderColor="gray.200"
              p="md"
            >
              <Center>{createElement(AllIcons[icon])}</Center>
              <Text textAlign="center">
                {icon
                  .replace('Icon', '')
                  .replace(/([A-Z]+)/g, ' $1')
                  .replace(/([A-Z][a-z])/g, ' $1')}
              </Text>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Foundations/Icons',
  component: Template,

  parameters: {
    docs: {
      source: {
        code: null,
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
        </>
      ),
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Template> = {};

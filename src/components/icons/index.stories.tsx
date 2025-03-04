import React, { createElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Primary, Subtitle, Title } from '@storybook/blocks';
import { Box, SimpleGrid } from '@chakra-ui/react';

import * as AllIcons from './index';

const Template = () => {
  return (
    <SimpleGrid columns={6} gap="lg">
      {(Object.keys(AllIcons) as Array<keyof typeof AllIcons>)
        .sort()
        .map((icon, index) => {
          return (
            <Box
              key={index}
              border="1px"
              borderRadius="lg"
              borderColor="gray.200"
              p="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              {createElement(AllIcons[icon])}
              {icon
                .replace('Icon', '')
                .replace(/([A-Z]+)/g, ' $1')
                .replace(/([A-Z][a-z])/g, ' $1')}
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
      canvas: {
        sourceState: 'none',
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

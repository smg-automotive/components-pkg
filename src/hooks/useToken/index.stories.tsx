import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, Text } from '@chakra-ui/react';

import useToken from './index';

const TokenDemo = ({
  scale,
  token,
  fallback,
}: {
  scale: string;
  token: string[];
  fallback?: string[];
}) => {
  const values = useToken(scale, token, fallback);

  return (
    <Box>
      <Heading as="h4">Returned values: </Heading>
      <Text>[{values.map((value) => `"${value}"`).join(', ')}]</Text>
    </Box>
  );
};

const meta: Meta<typeof TokenDemo> = {
  title: 'Hooks/useToken',
  component: TokenDemo,
  args: {
    scale: 'colors',
    token: ['red.500', 'green.500', 'blue.500'],
    fallback: ['#FF0000', '#00FF00', '#0000FF'],
  },
  argTypes: {
    scale: {
      control: { type: 'text' },
      description: 'The token scale to use (e.g., colors, sizes, spacing)',
    },
    token: {
      control: { type: 'object' },
      description:
        'An array of token names to retrieve values for (e.g., ["red.500", "blue.500"])',
    },
    fallback: {
      control: { type: 'object' },
      description:
        'An optional array of fallback values if the token is not found',
    },
  },
};

export default meta;

export const Colors: StoryObj<typeof TokenDemo> = {
  name: 'Colors > Tokens',
};

export const Sizes: StoryObj<typeof TokenDemo> = {
  name: 'Sizes > Tokens',
  args: {
    scale: 'sizes',
    token: ['xs', 'sm', 'md'],
    fallback: ['1rem', '1.5rem', '2.25rem'],
  },
};

export const Spacing: StoryObj<typeof TokenDemo> = {
  name: 'Spacing > Tokens',
  args: {
    scale: 'spacing',
    token: ['xs', 'sm', 'md'],
    fallback: ['0.25rem', '0.5rem', '0.75rem'],
  },
};

export const InvalidTokensWithFallback: StoryObj<typeof TokenDemo> = {
  args: {
    scale: 'colors',
    token: [
      'nonexistent.token.red',
      'nonexistent.token.green',
      'nonexistent.token.blue',
    ],
    fallback: ['#FF0000', '#00FF00', '#0000FF'],
  },
};

export const InvalidTokensWithoutFallback: StoryObj<typeof TokenDemo> = {
  args: {
    scale: 'colors',
    token: [
      'nonexistent.token.red',
      'nonexistent.token.green',
      'nonexistent.token.blue',
    ],
    fallback: undefined,
  },
};

export const MixedTokensWithFallback: StoryObj<typeof TokenDemo> = {
  args: {
    scale: 'colors',
    token: ['red.500', 'nonexistent.token.green', 'blue.500'],
    fallback: ['#FF0000', '#00FF00', '#0000FF'],
  },
};

export const MixedTokensWithoutFallback: StoryObj<typeof TokenDemo> = {
  args: {
    scale: 'colors',
    token: ['red.500', 'nonexistent.token.green', 'blue.500'],
    fallback: undefined,
  },
};

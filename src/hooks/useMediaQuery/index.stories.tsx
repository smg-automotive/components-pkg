import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Text } from '@chakra-ui/react';

import useMediaQuery, { QueryProps } from './index';
const queryToString = (query: QueryProps): string => {
  const { above, below } = query;

  if (above && below) {
    return `is between ${above} and ${below}`;
  }

  if (above) {
    return `is above ${above}`;
  }

  if (below) {
    return `is below ${below}`;
  }

  return 'invalid query';
};

const MediaQueryDemo = ({ query }: { query: QueryProps }) => {
  const isMatch = useMediaQuery(query);

  return (
    <Box>
      <Text>
        {queryToString(query)}
        <strong>{isMatch ? '✅ true' : '❌ false'}</strong>
      </Text>
    </Box>
  );
};

const meta: Meta<typeof MediaQueryDemo> = {
  title: 'Hooks/useMediaQuery',
  component: MediaQueryDemo,
  args: {
    query: { below: 'sm' },
  },
};

export default meta;

export const BelowSm: StoryObj<typeof MediaQueryDemo> = {};

export const AboveSm: StoryObj<typeof MediaQueryDemo> = {
  args: {
    query: { above: 'sm' },
  },
};

export const BelowMd: StoryObj<typeof MediaQueryDemo> = {
  args: {
    query: { below: 'md' },
  },
};

export const AboveMd: StoryObj<typeof MediaQueryDemo> = {
  args: {
    query: { above: 'md' },
  },
};

export const AboveSmBelowMd: StoryObj<typeof MediaQueryDemo> = {
  args: {
    query: { above: 'sm', below: 'md' },
  },
};

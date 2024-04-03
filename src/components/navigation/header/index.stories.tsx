import React from 'react';
import { Meta } from '@storybook/react';

import Box from 'src/components/box';

import Navigation from './index';

const meta: Meta<typeof Navigation> = {
  title: 'Patterns/Navigation/Header',
  component: Navigation,
  decorators: [
    (Story) => (
      <Box fontFamily="Make It Sans" position="relative" height="250px">
        <Story />
      </Box>
    ),
  ],

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    brand: {
      options: ['autoscout24', 'motoscout24'],
      control: 'select',
    },

    environment: {
      options: ['preprod', 'production'],
      control: 'select',
    },

    user: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Unauthenticated = {
  args: {
    user: null,
    language: 'de',
    brand: 'autoscout24',
    environment: 'preprod',
  },
};

/**
 * For the mega dropdown to work properly visit the story directly
 **/
export const Professional = {
  args: {
    user: {
      id: 123,
      userName: 'Amir Professional',
      userType: 'professional',
      accountId: 525,
    },

    language: 'de',
    brand: 'autoscout24',
    useAbsoluteUrls: true,
    environment: 'preprod',

    entitlements: [
      'business-image',
      'optimizer',
      'optimizer-pro',
      'auto-radar',
      'auto-radar-fast',
      'listing-visibility-standard',
      'listing-visibility-premium',
    ],
  },
};

/**
 * For the mega dropdown to work properly visit the story directly
 **/
export const Private = {
  args: {
    user: {
      id: 123,
      userName: 'John Private',
      userType: 'private',
      accountId: 525,
    },

    useAbsoluteUrls: true,
    language: 'de',
    brand: 'autoscout24',
    environment: 'preprod',
  },
};

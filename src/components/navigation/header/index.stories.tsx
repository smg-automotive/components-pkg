import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Brand } from 'src/types/brand';
import Box from 'src/components/box';

import { privateSeller, professionalSeller } from 'fixtures/user';

import Navigation from './index';

/**
 * Header dropdown navigation uses drawers to display the content.
 * They will pop up from the top of the screen.
 * To experience "page-like" behaviour visit story directly
 **/
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

  args: {
    brand: Brand.AutoScout24,
    language: 'de',
    environment: 'preprod',
    useAbsoluteUrls: false,
    project: undefined,
    entitlements: [],
    trackEvent: action('track navigation item click'),
    comparisonItemIds: [1, 2, 3],
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

    project: {
      options: ['listings-web', 'seller-web'],
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

type StoryType = StoryObj<typeof Navigation>;
export const Unauthenticated: StoryType = {
  args: {
    user: null,
  },
};

export const Professional: StoryType = {
  args: {
    user: professionalSeller(),
    entitlements: [
      'list',
      'optimizer',
      'optimizer-pro',
      'list-image',
      'test-drive',
      'business-image',
      'business-video',
      'previous-price',
      'seller-website',
      'tutti-export-premium',
      'anibis-export-premium',
      'listing-visibility-premium',
      'seller-alternative-listings',
      'auto-radar',
    ],
  },
};

export const Private: StoryType = {
  args: {
    user: privateSeller(),
    entitlements: [
      'list',
      'top-list',
      'list-image',
      'safe-number',
      'previous-price',
    ],
  },
};

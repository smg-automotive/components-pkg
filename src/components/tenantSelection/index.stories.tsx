import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { enrichedSessionUser } from 'fixtures/enrichedSessionUser';

import TenantSelection from './index';

const meta: Meta<typeof TenantSelection> = {
  title: 'Auth/TenantSelection',
  component: TenantSelection,

  args: {
    language: 'de',
    user: 'enrichedSessionUser' as unknown as typeof enrichedSessionUser,
    selectTenant: action('selectTenant'),
    isLoading: false,
  },

  argTypes: {
    user: {
      options: ['enrichedSessionUser', 'none'],
      mapping: {
        enrichedSessionUser,
        none: null,
      },

      control: { type: 'select' },
    },
    language: {
      options: ['de', 'en', 'fr', 'it'],
      control: { type: 'select' },
    },
    selectTenant: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Overview: StoryObj<typeof TenantSelection> = {};

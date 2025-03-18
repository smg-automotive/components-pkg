import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { multiTenantSeller } from 'fixtures/user';

import TenantSelection from './index';

const meta: Meta<typeof TenantSelection> = {
  title: 'Auth/TenantSelection',
  component: TenantSelection,

  args: {
    language: 'de',
    user: 'multiTenantSeller' as unknown as ReturnType<
      typeof multiTenantSeller
    >,
    selectTenant: action('selectTenant'),
    isLoading: false,
  },

  argTypes: {
    user: {
      options: ['multiTenantSeller', 'none'],
      mapping: {
        multiTenantSeller: multiTenantSeller({ forceTenantSelection: true }),
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

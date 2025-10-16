import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { multiTenantUser } from '@smg-automotive/auth/fixtures';

import TenantSelection from './index';

const meta: Meta<typeof TenantSelection> = {
  title: 'Auth/TenantSelection',
  component: TenantSelection,

  args: {
    language: 'de',
    user: 'user' as unknown as ReturnType<typeof multiTenantUser>,
    selectTenant: action('selectTenant'),
    isLoading: false,
  },

  argTypes: {
    user: {
      options: ['user', 'none'],
      mapping: {
        user: multiTenantUser({
          managedSellers: new Array(100).fill(null).map((_, index) => ({
            id: 6000 + index,
            billingAddress: null,
            billingCity: 'Zurich',
            billingCountryCode: null,
            billingName: `Garage Amir ${index}`,
            billingPostOfficeBox: null,
            billingZipCode: (8000 + index).toString(),
          })),
          forceTenantSelection: true,
        }),
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

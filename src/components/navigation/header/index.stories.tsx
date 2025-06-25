import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  multiTenantUser,
  privateUser,
  professionalUser,
} from '@smg-automotive/auth/fixtures';

import { Brand } from 'src/types/brand';
import { PageLayout } from 'src/components/layout';
import Box from 'src/components/box';

import Navigation from './index';

const Wrapper: typeof Navigation = ({ user, selectTenant, ...props }) => {
  const [selectedTenant, setSelectedTenant] = React.useState<string | null>(
    user?.sellerId || null,
  );
  return (
    <Navigation
      user={
        user && selectedTenant
          ? {
              ...user,
              sellerId: selectedTenant,
            }
          : null
      }
      selectTenant={(newTenantId) =>
        new Promise((resolve) => {
          setSelectedTenant(newTenantId.toString());
          selectTenant(newTenantId);
          setTimeout(resolve, 300);
        })
      }
      {...props}
    />
  );
};

/**
 * Header dropdown navigation uses drawers to display the content.
 * They will pop up from the top of the screen.
 * To experience "page-like" behaviour visit story directly
 **/
const meta: Meta<typeof Navigation> = {
  title: 'Patterns/Navigation/Header',
  component: Wrapper,
  decorators: [
    (Story) => (
      <PageLayout header={<Story />} maxContentWidth="2xl">
        <Box
          height="400px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="blue.100"
        >
          This is page content
        </Box>
      </PageLayout>
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
    selectTenant: async (id) => action('select tenant')(id),
    experiments: {
      leasing: 'on',
    },
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
    experiments: {
      leasing: 'on',
    },
  },
};

export const Professional: StoryType = {
  args: {
    user: professionalUser(),
    experiments: {
      leasing: 'on',
    },
  },
};

export const ProfessionalWithMultiTenancy: StoryType = {
  args: {
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
    }),
    experiments: {
      leasing: 'on',
    },
  },
};

export const Private: StoryType = {
  args: {
    user: privateUser(),
    experiments: {
      leasing: 'on',
    },
  },
};

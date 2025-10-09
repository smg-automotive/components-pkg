import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  multiTenantUser,
  privateUser,
  professionalUser,
} from '@smg-automotive/auth/fixtures';
import { Auth0UserType } from '@smg-automotive/auth';

import { Entitlement } from 'src/types/entitlements';
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
    entitlements: [Entitlement.Optimizer],
    trackEvent: action('track navigation item click'),
    comparisonItemIds: [1, 2, 3],
    selectTenant: async (id) => action('select tenant')(id),
    showTenantSelection: true,
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
  },
};

export const Professional: StoryType = {
  args: {
    user: professionalUser(),
  },
};

export const ProfessionalWithoutOptimizer: StoryType = {
  args: {
    user: {
      email: 'engineering@smg.ch',
      email_verified: true,
      sub: 'auth0|648ac71d25762',
      sid: 'W8AtOcvp83mNWbjV',
      isImpersonated: false,
      userId: '1001',
      forceTenantSelection: false,
      isMultiTenantUser: false,
      userType: Auth0UserType.Professional,
      sellerId: '60601',
      managedSellers: [],
      entitlements: {},
    },
  },
};

export const ProfessionalWithOptimizerPro: StoryType = {
  args: {
    user: {
      email: 'engineering@smg.ch',
      email_verified: true,
      sub: 'auth0|648ac71d257338d',
      sid: 'W8AtOpp83mNWbjV',
      isImpersonated: false,
      userId: '1001',
      forceTenantSelection: false,
      isMultiTenantUser: false,
      userType: Auth0UserType.Professional,
      sellerId: '60601',
      managedSellers: [],
      entitlements: {
        'optimizer-pro': {
          global: {
            maxItems: 1,
            remainingItems: 0,
          },
          listings: {},
        },
      },
    },
  },
};

export const ProfessionalWithOptimizerBasic: StoryType = {
  args: {
    user: {
      email: 'engineering@smg.ch',
      email_verified: true,
      sub: 'auth0|648a338d',
      sid: 'W8AtOcv69YRmNWbjV',
      isImpersonated: false,
      userId: '1001',
      forceTenantSelection: false,
      isMultiTenantUser: false,
      userType: Auth0UserType.Professional,
      sellerId: '60601',
      managedSellers: [],
      entitlements: {
        optimizer: {
          global: {
            maxItems: 1,
            remainingItems: 0,
          },
          listings: {},
        },
      },
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
  },
};

export const Private: StoryType = {
  args: {
    user: privateUser(),
  },
};

export const ProfessionalWithTenantSelectionHidden: StoryType = {
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
    showTenantSelection: false,
  },
};

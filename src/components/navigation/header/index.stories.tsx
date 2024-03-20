import Box from 'src/components/box';

import Navigation from './index.tsx';

const Template = (args) => {
  return (
    <Box fontFamily="Make It Sans">
      <Navigation {...args} />
    </Box>
  );
};

export default {
  title: 'Patterns/Navigation/Header',
  component: Navigation,

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
  },
};

export const Professional = {
  render: Template.bind({}),
  name: 'Professional',

  args: {
    user: {
      id: 123,
      userName: 'John Doe',
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

export const Private = {
  render: Template.bind({}),
  name: 'Private',

  args: {
    user: {
      id: 123,
      name: 'John Doe',
      userType: 'private',
      accountId: 525,
    },

    useAbsoluteUrls: true,
    language: 'de',
    brand: 'autoscout24',
    environment: 'preprod',
  },
};

export const Unauthenticated = {
  render: Template.bind({}),
  name: 'Unauthenticated',

  args: {
    user: null,
    language: 'de',
    brand: 'autoscout24',
    environment: 'preprod',
  },
};

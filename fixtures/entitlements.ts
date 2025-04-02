import { EnrichedSessionUser } from '@smg-automotive/auth';

export const privateSellerEntitlements: EnrichedSessionUser['entitlements'] = {
  list: {
    global: { maxItems: 1, remainingItems: 1 },
    listings: {
      '12345': {
        maxItems: 1,
        remainingItems: 1,
      },
    },
  },
  'top-list': {
    global: { maxItems: 1, remainingItems: 1 },
    listings: {
      '12345': {
        maxItems: 1,
        remainingItems: 1,
      },
    },
  },
  'list-image': {
    global: { maxItems: 30, remainingItems: 30 },
    listings: {
      '12345': {
        maxItems: 30,
        remainingItems: 5,
      },
    },
  },
  'safe-number': {
    global: { maxItems: 1, remainingItems: 1 },
    listings: {
      '12345': {
        maxItems: 1,
        remainingItems: 1,
      },
    },
  },
  'optimizer-pro': {
    global: { maxItems: 1, remainingItems: 1 },
    listings: {
      '12345': {
        maxItems: 1,
        remainingItems: 1,
      },
    },
  },
  'previous-price': {
    global: { maxItems: 1, remainingItems: 1 },
    listings: {
      '12345': {
        maxItems: 1,
        remainingItems: 1,
      },
    },
  },
};

export const professionalSellerEntitlements: EnrichedSessionUser['entitlements'] =
  {
    list: {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    optimizer: {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'list-image': {
      global: {
        maxItems: 32,
        remainingItems: 32,
      },
      listings: {},
    },
    'test-drive': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'optimizer-pro': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'business-image': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'business-video': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'previous-price': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'seller-website': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'tutti-export-premium': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'anibis-export-premium': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'listing-visibility-premium': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
    'seller-alternative-listings': {
      global: {
        maxItems: 2147483647,
        remainingItems: 2147483647,
      },
      listings: {},
    },
  };

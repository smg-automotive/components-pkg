import { Entitlement } from 'src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const topListingProLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.topListingPro',
  link: {
    de: '/de/features/top-list/manage',
    en: '/de/features/top-list/manage',
    fr: '/fr/features/top-list/manage',
    it: '/it/features/top-list/manage',
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  entitlementConfig: {
    singleRequiredEntitlement: [
      Entitlement.ListingVisibilityStandard,
      Entitlement.ListingVisibilityPremium,
    ],
    missingEntitlementTranslationKey: 'header.userMenu.topListing',
  },
};

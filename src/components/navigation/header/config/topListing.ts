import { Entitlement } from 'src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const topListingProLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.topListingPro',
  link: {
    de: '/de/member/toplisting',
    en: '/de/member/toplisting',
    fr: '/fr/member/toplisting',
    it: '/it/member/toplisting',
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

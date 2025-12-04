import { Entitlement } from 'src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const marketPriceCheckLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.marketPriceCheck',
  link: {
    de: '/de/market-price-check',
    en: '/de/market-price-check',
    fr: '/fr/market-price-check',
    it: '/it/market-price-check',
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
    hideIfRequiredEntitlementIsMissing: !!Entitlement.MarketPriceCheck,
    singleRequiredEntitlement: [Entitlement.MarketPriceCheck],
    missingEntitlementTranslationKey: '',
  },
};

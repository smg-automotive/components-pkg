import { Entitlement } from '@/src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const optimizerProLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizerPro',
  link: {
    de: '/de/optimizer/entry',
    en: '/en/optimizer/entry',
    fr: '/fr/optimizer/entry',
    it: '/it/optimizer/entry',
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
    hideIfRequiredEntitlementIsMissing: true,
    singleRequiredEntitlement: [Entitlement.OptimizerPro],
  },
  projectIdentifier: 'seller-web',
};

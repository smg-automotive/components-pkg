import { Entitlement } from 'src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const optimizerLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizer',
  link: {
    de: '/de/productdescription/optimizer',
    en: '/de/productdescription/optimizer',
    fr: '/fr/productdescription/optimizer',
    it: '/it/productdescription/optimizer',
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
    hideIfEntitlementIsPresent: Entitlement.OptimizerPro,
    singleRequiredEntitlement: [Entitlement.Optimizer],
    missingEntitlementFallbackLink: {
      de: '/de/productdescription/optimizer',
      en: '/de/productdescription/optimizer',
      fr: '/fr/productdescription/optimizer',
      it: '/it/productdescription/optimizer',
    },
  },
};

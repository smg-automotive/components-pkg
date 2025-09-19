import { Entitlement } from 'src/types/entitlements';

import { NavigationLinkConfigProps } from './headerLinks';

export const optimizerLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizerPro',
  link: {
    de: 'https://b2b.autoscout24.ch/aboss/optimizer-2',
    en: 'https://b2b.autoscout24.ch/aboss/optimizer-2',
    fr: 'https://b2b.autoscout24.ch/fr/aboss/optimizer-2',
    it: 'https://b2b.autoscout24.ch/it/aboss/optimizer-2',
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
      de: 'https://b2b.autoscout24.ch/aboss/optimizer-2',
      en: 'https://b2b.autoscout24.ch/aboss/optimizer-2',
      fr: 'https://b2b.autoscout24.ch/fr/aboss/optimizer-2',
      it: 'https://b2b.autoscout24.ch/it/aboss/optimizer-2',
    },
  },
};

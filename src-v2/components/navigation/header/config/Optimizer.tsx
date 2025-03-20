import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const optimizerLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizer',
  link: {
    de: '/de/member/optimizer',
    en: '/de/member/optimizer',
    fr: '/fr/member/optimizer',
    it: '/it/member/optimizer',
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
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

export const optimizerProLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizerPro',
  link: {
    de: '/de/member/optimizerpro',
    en: '/de/member/optimizerpro',
    fr: '/fr/member/optimizerpro',
    it: '/it/member/optimizerpro',
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
};

import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const optimizerLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.optimizer',
  link: {
    de: '/de/vehicle-management?origin=legacy-optimizer',
    en: '/de/vehicle-management?origin=legacy-optimizer',
    fr: '/fr/vehicle-management?origin=legacy-optimizer',
    it: '/it/vehicle-management?origin=legacy-optimizer',
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
    de: '/de/vehicle-management?origin=legacy-optimizer',
    en: '/de/vehicle-management?origin=legacy-optimizer',
    fr: '/fr/vehicle-management?origin=legacy-optimizer',
    it: '/it/vehicle-management?origin=legacy-optimizer',
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

import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const autoScoutMarketPriceCheckLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.marketPriceCheck',
  link: {
    de: '/de/member/vehicleacquisition',
    en: '/de/member/vehicleacquisition',
    fr: '/fr/member/vehicleacquisition',
    it: '/it/member/vehicleacquisition',
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
  entitlementConfig: {
    singleRequiredEntitlement: [Entitlement.OptimizerPro],
    missingEntitlementFallbackLink: {
      de: '/de/productdescription/as24_optimizer_pro',
      en: '/de/productdescription/as24_optimizer_pro',
      fr: '/fr/productdescription/as24_optimizer_pro',
      it: '/it/productdescription/as24_optimizer_pro',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

export const motoScoutMarketPriceCheckLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.marketPriceCheck',
  link: {
    de: '/de/member/vehicleacquisition',
    en: '/de/member/vehicleacquisition',
    fr: '/fr/member/vehicleacquisition',
    it: '/it/member/vehicleacquisition',
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: true,
    },
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
  entitlementConfig: {
    singleRequiredEntitlement: [
      Entitlement.OptimizerPro,
      Entitlement.Optimizer,
    ],
    missingEntitlementFallbackLink: {
      de: '/de/productdescription/as24_optimizer_pro',
      en: '/de/productdescription/as24_optimizer_pro',
      fr: '/fr/productdescription/as24_optimizer_pro',
      it: '/it/productdescription/as24_optimizer_pro',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

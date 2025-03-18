import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const autoRadarLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.autoRadar',
  link: {
    de: '/de/member/autoradarlauncher/all',
    en: '/de/member/autoradarlauncher/all',
    fr: '/fr/member/autoradarlauncher/all',
    it: '/it/member/autoradarlauncher/all',
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
    singleRequiredEntitlement: [
      Entitlement.AutoRadar,
      Entitlement.AutoRadarFast,
    ],
    missingEntitlementFallbackLink: {
      de: '/de/productdescription/as24_autoradar',
      en: '/de/productdescription/as24_autoradar',
      fr: '/fr/productdescription/as24_autoradar',
      it: '/it/productdescription/as24_autoradar',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

export const manageAutoRadarLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.manageAutoRadar',
  link: {
    de: '/de/member/autoradar',
    en: '/de/member/autoradar',
    fr: '/fr/member/autoradar',
    it: '/it/member/autoradar',
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
    singleRequiredEntitlement: [
      Entitlement.AutoRadar,
      Entitlement.AutoRadarFast,
    ],
    missingEntitlementFallbackLink: {
      de: '/de/productdescription/as24_autoradar ',
      en: '/de/productdescription/as24_autoradar ',
      fr: '/fr/productdescription/as24_autoradar ',
      it: '/it/productdescription/as24_autoradar ',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const autoRadarLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.autoRadar',
  link: {
    de: '/de/autoradar/saved-searches/all',
    en: '/de/autoradar/saved-searches/all',
    fr: '/fr/autoradar/saved-searches/all',
    it: '/it/autoradar/saved-searches/all',
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
      de: '/de/autoradar',
      en: '/de/autoradar',
      fr: '/fr/autoradar',
      it: '/it/autoradar',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
  projectIdentifier: 'listings-web',
};

import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const infoPageLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.infoPage',
  projectIdentifier: 'seller-web',
  link: {
    de: '/de/info-management/hero-image',
    en: '/en/info-management/hero-image',
    fr: '/fr/info-management/hero-image',
    it: '/it/info-management/hero-image',
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
};

export const contactDetailsLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.contactDetails',
  link: {
    de: '/de/profile',
    en: '/en/profile',
    fr: '/fr/profile',
    it: '/it/profile',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  projectIdentifier: 'seller-web',
};

export const openingHoursLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.openingHours',
  link: {
    de: '/de/info-management/opening-hours',
    en: '/en/info-management/opening-hours',
    fr: '/fr/info-management/opening-hours',
    it: '/it/info-management/opening-hours',
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
};

export const businessImageLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.businessImage',
  link: {
    de: '/de/info-management/business-image',
    en: '/en/info-management/business-image',
    fr: '/fr/info-management/business-image',
    it: '/it/info-management/business-image',
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
    singleRequiredEntitlement: [Entitlement.BusinessImage],
    missingEntitlementFallbackLink: {
      de: '/de/info-management/business-image',
      en: '/en/info-management/business-image',
      fr: '/fr/info-management/business-image',
      it: '/it/info-management/business-image',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

export const photoBarLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.editPhotobar',
  link: {
    de: '/de/info-management/photo-bar',
    en: '/en/info-management/photo-bar',
    fr: '/fr/info-management/photo-bar',
    it: '/it/info-management/photo-bar',
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
};

export const qualilogoLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.qualityLogo',
  link: {
    de: '/de/info-management/quali-logo',
    en: '/en/info-management/quali-logo',
    fr: '/fr/info-management/quali-logo',
    it: '/it/info-management/quali-logo',
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
};

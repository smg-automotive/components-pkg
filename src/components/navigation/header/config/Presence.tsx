import React from 'react';

import { Entitlement } from 'src/types/entitlements';
import { CartIcon } from 'src/components/icons';

import { NavigationLinkConfigProps } from './headerLinks';

export const infoPageLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.infoPage',
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
    de: '/de/member/businesshours',
    en: '/de/member/businesshours',
    fr: '/fr/member/businesshours',
    it: '/it/member/businesshours',
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
    de: '/de/member/businessimage',
    en: '/de/member/businessimage',
    fr: '/de/member/businessimage',
    it: '/it/member/businessimage',
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
      de: '/de/productdescription/as24_businessimage',
      en: '/de/productdescription/as24_businessimage',
      fr: '/fr/productdescription/as24_businessimage',
      it: '/it/productdescription/as24_businessimage',
    },
    missingEntitlementLinkIcon: <CartIcon />,
  },
};

export const photoBarLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.editPhotobar',
  link: {
    de: '/de/member/templates/photobar',
    en: '/de/member/templates/photobar',
    fr: '/it/member/templates/photobar',
    it: '/it/member/templates/photobar',
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
    de: '/de/member/qualilogo',
    en: '/de/member/qualilogo',
    fr: '/fr/member/qualilogo',
    it: '/it/member/qualilogo',
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

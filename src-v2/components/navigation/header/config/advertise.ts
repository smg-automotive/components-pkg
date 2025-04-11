import { NavigationLinkConfigProps } from './headerLinks';

export const onlineAdvertisingLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.onlineAdvertising',
  link: {
    de: '/de/member/displayads',
    en: '/de/member/displayads',
    fr: '/fr/member/displayads',
    it: '/it/member/displayads',
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

export const advertisePartsAccessoriesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.advertisePartsAccessories',
  link: {
    de: '/de/ersatzteile-zubehoer/insertion',
    en: '/de/ersatzteile-zubehoer/insertion',
    fr: '/fr/pieces-accessoires/insertion',
    it: '/it/ricambi-accessori/insertion',
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

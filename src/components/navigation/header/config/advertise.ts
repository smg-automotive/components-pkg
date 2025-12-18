import { NavigationLinkConfigProps } from './headerLinks';

export const onlineAdvertisingLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.onlineAdvertising',
  link: {
    de: '/de/contact',
    en: '/en/contact',
    fr: '/fr/contact',
    it: '/it/contact',
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

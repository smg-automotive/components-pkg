import { NavigationLinkConfigProps } from './headerLinks';

export const dealerInfoSystemLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.dealerInfoSystem',
  link: {
    de: 'https://bi.scout24.ch',
    en: 'https://bi.scout24.ch',
    fr: 'https://bi.scout24.ch',
    it: 'https://bi.scout24.ch',
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: false,
    },
    brand: {
      autoscout24: false,
      motoscout24: false,
    },
  },
};

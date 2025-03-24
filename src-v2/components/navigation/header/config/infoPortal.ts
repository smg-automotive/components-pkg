import { NavigationLinkConfigProps } from './headerLinks';

export const infoPortalLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.infoPortal',
  link: {
    de: 'https://b2b.autoscout24.ch/',
    en: 'https://b2b.autoscout24.ch/',
    fr: 'https://b2b.autoscout24.ch/fr/',
    it: 'https://b2b.autoscout24.ch/it/',
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
};

import { NavigationLinkConfigProps } from './headerLinks';

export const hciLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.hci',
  link: {
    de: '/de/hci-management',
    en: '/en/hci-management',
    fr: '/fr/hci-management',
    it: '/it/hci-management',
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
  projectIdentifier: 'seller-web',
};

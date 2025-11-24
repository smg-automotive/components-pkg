import { NavigationLinkConfigProps } from './headerLinks';

export const printCenterLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.printingCenter',
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
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

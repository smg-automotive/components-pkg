import { NavigationLinkConfigProps } from './headerLinks';

export const printableVehiclesListLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.printableList',
  link: {
    de: '/de/member/printvehiclelist',
    en: '/en/member/printvehiclelist',
    fr: '/fr/member/printvehiclelist',
    it: '/it/member/printvehiclelist',
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: true,
    },
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
};

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

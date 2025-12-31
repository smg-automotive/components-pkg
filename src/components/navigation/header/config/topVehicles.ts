import { NavigationLinkConfigProps } from './headerLinks';

export const autoScoutTopVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.topCars',
  link: {
    de: '/de/features/top-vehicle/manage',
    en: '/de/features/top-vehicle/manage',
    fr: '/fr/features/top-vehicle/manage',
    it: '/it/features/top-vehicle/manage',
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

export const motoScoutTopVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.topMotos',
  link: {
    de: '/de/features/top-vehicle/manage',
    en: '/de/features/top-vehicle/manage',
    fr: '/fr/features/top-vehicle/manage',
    it: '/it/features/top-vehicle/manage',
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

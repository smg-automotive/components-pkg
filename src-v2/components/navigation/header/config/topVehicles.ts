import { NavigationLinkConfigProps } from './headerLinks';

export const autoScoutTopVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.topCars',
  link: {
    de: '/de/member/topvehicles',
    en: '/de/member/topvehicles',
    fr: '/fr/member/topvehicles',
    it: '/it/member/topvehicles',
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
    de: '/de/member/topvehicles',
    en: '/de/member/topvehicles',
    fr: '/fr/member/topvehicles',
    it: '/it/member/topvehicles',
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

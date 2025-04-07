import { NavigationLinkConfigProps } from './headerLinks';

export const autoScoutVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.myVehicles',
  projectIdentifier: 'seller-web',
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
};

export const motoScoutVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.myMotorcycles',
  projectIdentifier: 'seller-web',
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
};

export const motorcycleParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.motorcyclePark',
  forceMotoscoutLink: true,
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
};

export const carParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.carPark',
  forceAutoscoutLink: true,
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
};

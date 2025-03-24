import { NavigationLinkConfigProps } from './headerLinks';

export const privateAutoScoutVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.myVehicles',
  link: {
    de: '/de/vehicle-management',
    en: '/en/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: false,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
  projectIdentifier: 'seller-web',
};

export const professionalAutoScoutVehiclesLinkConfig: NavigationLinkConfigProps =
  {
    translationKey: 'header.userMenu.myVehicles',
    isInternal: true,
    link: {
      de: '/de/vehicles',
      en: '/de/vehicles',
      fr: '/fr/vehicles',
      it: '/it/vehicles',
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

export const privateMotoScoutVehiclesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.myMotorcycles',
  isInternal: true,
  link: {
    de: '/de/vehicles',
    en: '/de/vehicles',
    fr: '/fr/vehicles',
    it: '/it/vehicles',
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

export const professionalMotoScoutVehiclesLinkConfig: NavigationLinkConfigProps =
  {
    translationKey: 'header.userMenu.myMotorcycles',
    link: {
      de: '/de/vehicle-management',
      en: '/en/vehicle-management',
      fr: '/fr/vehicle-management',
      it: '/it/vehicle-management',
    },
    visibilitySettings: {
      userType: {
        private: true,
        professional: false,
      },
      brand: {
        autoscout24: false,
        motoscout24: true,
      },
    },
    projectIdentifier: 'seller-web',
  };

export const privateMotorcycleParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.motorcyclePark',
  forceMotoscoutLink: true,
  link: {
    de: '/de/vehicle-management',
    en: '/de/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: false,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
  projectIdentifier: 'seller-web',
};

export const professionalMotorcycleParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.motorcyclePark',
  forceMotoscoutLink: true,
  link: {
    de: '/de/member/vehiclepool',
    en: '/de/member/vehiclepool',
    fr: '/fr/member/vehiclepool',
    it: '/it/member/vehiclepool',
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

export const privateCarParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.carPark',
  forceAutoscoutLink: true,
  link: {
    de: '/de/vehicle-management',
    en: '/de/vehicle-management',
    fr: '/fr/vehicle-management',
    it: '/it/vehicle-management',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: false,
    },
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
};

export const professionalCarParkLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.carPark',
  forceAutoscoutLink: true,
  link: {
    de: '/de/member/vehiclepool',
    en: '/de/member/vehiclepool',
    fr: '/fr/member/vehiclepool',
    it: '/it/member/vehiclepool',
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

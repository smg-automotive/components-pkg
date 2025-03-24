import { NavigationLinkConfigProps } from './headerLinks';

export const simpleSearchLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.simpleSearch',
  link: {
    de: '/de',
    en: '/de',
    fr: '/fr',
    it: '/it',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  projectIdentifier: 'listings-web',
};

export const advancedSearchLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.advancedSearch',
  link: {
    de: '/de/s/advanced',
    en: '/de/s/advanced',
    fr: '/fr/s/advanced',
    it: '/it/s/advanced',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  projectIdentifier: 'listings-web',
};

export const autoScoutSellerSearchLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.searchMerchant',
  link: {
    de: '/de/sellers/search',
    en: '/de/sellers/search',
    fr: '/fr/sellers/search',
    it: '/it/sellers/search',
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
  projectIdentifier: 'listings-web',
};

export const motoScoutSellerSearchLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.searchMerchant',
  link: {
    de: '/de/sellers/search',
    en: '/de/sellers/search',
    fr: '/fr/sellers/search',
    it: '/it/sellers/search',
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

export const searchMotorcycleLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.searchMotorcycles',
  forceMotoscoutLink: true,
  link: {
    de: '/de',
    en: '/de',
    fr: '/fr',
    it: '/it',
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
  projectIdentifier: 'listings-web',
};

export const searchCarsLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.searchMenu.searchCars',
  forceAutoscoutLink: true,
  link: {
    de: '/de',
    en: '/de',
    fr: '/fr',
    it: '/it',
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
  projectIdentifier: 'listings-web',
};

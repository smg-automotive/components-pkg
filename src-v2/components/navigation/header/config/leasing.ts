import { NavigationLinkConfigProps } from './headerLinks';

export const leasingLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.leasing',
  link: {
    de: '/de/member/leasing',
    en: '/de/member/leasing',
    fr: '/fr/member/leasing',
    it: '/it/member/leasing',
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

export const leasingDashboardLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.leasingNew',
  isInternal: true,
  link: {
    de: '/de/leasing-dashboard',
    en: '/de/leasing-dashboard',
    fr: '/fr/leasing-dashboard',
    it: '/it/leasing-dashboard',
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

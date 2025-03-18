import { NavigationLinkConfigProps } from './headerLinks';

export const dmsLogLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.dmsLog',
  link: {
    de: '/de/member/dmsinfo/log',
    en: '/de/member/dmsinfo/log',
    fr: '/fr/member/dmsinfo/log',
    it: '/it/member/dmsinfo/log',
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

import { NavigationLinkConfigProps } from './headerLinks';

export const importInfoLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.importInfo',
  link: {
    de: '/de/member/importinfo/',
    en: '/de/member/importinfo/',
    fr: '/fr/member/importinfo/',
    it: '/it/member/importinfo/',
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

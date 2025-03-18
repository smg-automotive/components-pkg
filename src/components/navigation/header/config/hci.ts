import { NavigationLinkConfigProps } from './headerLinks';

export const hciLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.hci',
  link: {
    de: '/de/member/hci',
    en: '/de/member/hci',
    fr: '/fr/member/hci',
    it: '/it/member/hci',
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

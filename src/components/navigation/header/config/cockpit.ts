import { NavigationLinkConfigProps } from './headerLinks';

export const cockpitLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.cockpit',
  link: {
    de: '/de/cockpit',
    en: '/de/cockpit',
    fr: '/fr/cockpit',
    it: '/it/cockpit',
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
  projectIdentifier: 'seller-web',
};

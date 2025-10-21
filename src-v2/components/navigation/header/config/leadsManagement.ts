import { NavigationLinkConfigProps } from './headerLinks';

export const leadsManagementLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.contactRequests',
  link: {
    de: '/de/message-manager',
    en: '/de/message-manager',
    fr: '/fr/message-manager',
    it: '/it/message-manager',
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
};

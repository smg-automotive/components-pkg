import { NavigationLinkConfigProps } from './headerLinks';


export const leadsManagementLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.contactRequests',
  link: {
    de: '/de/member/messagemanager',
    en: '/de/member/messagemanager',
    fr: '/fr/member/messagemanager',
    it: '/it/member/messagemanager',
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

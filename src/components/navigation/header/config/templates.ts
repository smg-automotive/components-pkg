import { NavigationLinkConfigProps } from './headerLinks';

export const teaserTemplatesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.manageAdditionalTitles',
  link: {
    de: '/de/info-management/additional-titles',
    en: '/en/info-management/additional-titles',
    fr: '/fr/info-management/additional-titles',
    it: '/it/info-management/additional-titles',
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

export const commentTemplatesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.manageNotes',
  link: {
    de: '/de/info-management/comment',
    en: '/en/info-management/comment',
    fr: '/fr/info-management/comment',
    it: '/it/info-management/comment',
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

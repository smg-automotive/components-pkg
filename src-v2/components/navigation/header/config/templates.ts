import { NavigationLinkConfigProps } from './headerLinks';

export const teaserTemplatesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.manageAdditionalTitles',
  link: {
    de: '/de/member/templates/teaser',
    en: '/de/member/templates/teaser',
    fr: '/fr/member/templates/teaser',
    it: '/it/member/templates/teaser',
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
    de: '/de/member/templates/comment',
    en: '/de/member/templates/comment',
    fr: '/fr/member/templates/comment',
    it: '/it/member/templates/comment',
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

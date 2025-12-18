import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const savedSearchesLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.requisitions',
  link: {
    de: '/de/me/saved-searches',
    en: '/de/me/saved-searches',
    fr: '/fr/me/saved-searches',
    it: '/it/me/saved-searches',
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

export const editUsersLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.editUser',
  link: {
    de: '/de/account/user-list',
    en: '/en/account/user-list',
    fr: '/fr/account/user-list',
    it: '/it/account/user-list',
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

export const changeLanguageLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.userLanguage',
  link: {
    de: '/de/account/change-language',
    en: '/en/account/change-language',
    fr: '/fr/account/change-language',
    it: '/it/account/change-language',
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

export const getFavoritesLinkConfig = ({
  trackEvent,
  eventLabel,
}: {
  trackEvent?: (event: CustomEvent) => void;
  eventLabel?: string;
}): NavigationLinkConfigProps => ({
  translationKey: 'header.userMenu.bookmarks',
  link: {
    de: '/de/me/favorites',
    en: '/de/me/favorites',
    fr: '/fr/me/favorites',
    it: '/it/me/favorites',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
      guest: false,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  projectIdentifier: 'listings-web',
  onClick: () =>
    trackEvent?.({
      eventCategory: navigationEventCategory,
      eventAction: 'open_favorites',
      eventLabel,
    }),
});

export const getLogoutLinkConfig = ({
  onLogout,
}: {
  onLogout: () => void;
}): NavigationLinkConfigProps => ({
  translationKey: 'header.userMenu.logout',
  color: 'red.500',
  onClick: onLogout,
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
});

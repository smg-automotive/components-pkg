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

export const favoritesLinkConfig: NavigationLinkConfigProps = {
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
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
  projectIdentifier: 'listings-web',
};

export const changeEmailLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.emailAddress',
  link: {
    de: '/de/account/change-email',
    en: '/en/account/change-email',
    fr: '/fr/account/change-email',
    it: '/it/account/change-email',
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

export const editUsersLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.editUser',
  link: {
    de: '/de/member/users/list',
    en: '/de/member/users/list',
    fr: '/fr/member/users/list',
    it: '/it/member/users/list',
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

export const accountSettingsLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.accountSettings',
  link: {
    de: '/de/member/masterdata/additionalusersettings',
    en: '/de/member/masterdata/additionalusersettings',
    fr: '/fr/member/masterdata/additionalusersettings',
    it: '/it/member/masterdata/additionalusersettings',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: false,
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
    de: '/de/member/masterdata/userlanguage',
    en: '/de/member/masterdata/userlanguage',
    fr: '/fr/member/masterdata/userlanguage',
    it: '/it/member/masterdata/userlanguage',
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

import { Language } from '@smg-automotive/i18n-pkg';

import { replaceLanguage } from '@/src/components/navigation/header/replaceLanguage';

import { NavigationLinkConfigProps } from './headerLinks';

export const switchToGermanLinkConfig = ({
  currentLanguage,
}: {
  currentLanguage: Language;
}): NavigationLinkConfigProps => ({
  title: 'Deutsch',
  onClick: () =>
    replaceLanguage({
      activeLanguage: currentLanguage,
      newLanguage: 'de',
    }),
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

export const switchToFrenchLinkConfig = ({
  currentLanguage,
}: {
  currentLanguage: Language;
}): NavigationLinkConfigProps => ({
  title: 'Français',
  onClick: () =>
    replaceLanguage({
      activeLanguage: currentLanguage,
      newLanguage: 'fr',
    }),
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

export const switchToItalianLinkConfig = ({
  currentLanguage,
}: {
  currentLanguage: Language;
}): NavigationLinkConfigProps => ({
  title: 'Italiano',
  onClick: () =>
    replaceLanguage({
      activeLanguage: currentLanguage,
      newLanguage: 'it',
    }),
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

export const switchToEnglishLinkConfig = ({
  currentLanguage,
}: {
  currentLanguage: Language;
}): NavigationLinkConfigProps => ({
  title: 'English',
  isNew: true,
  onClick: () =>
    replaceLanguage({
      activeLanguage: currentLanguage,
      newLanguage: 'en',
    }),
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

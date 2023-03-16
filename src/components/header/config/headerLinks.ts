import { NavigationLinkProps } from '../NavigationLink';
import { LinkConfig } from '..';
import { NavigationLinkConfigProps, resolveVisibility } from './converter';

const headerLinks: NavigationLinkConfigProps[] = [
  {
    translationKey: 'header.sell',
    url: {
      de: '/de/auto-verkaufen',
      en: '/de/auto-verkaufen',
      fr: '/fr/vendre-voiture',
      it: '/it/vendere-auto',
    },
    showUnderMoreLinkBelow: 'sm',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: true,
        ms24: false,
      },
    },
  },
  {
    translationKey: 'header.sell',
    url: {
      de: '/de/motorrad-inserieren',
      en: '/de/motorrad-inserieren',
      fr: '/fr/publier-annonce-moto',
      it: '/it/pubblicare-annuncio-moto',
    },
    showUnderMoreLinkBelow: 'sm',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: false,
        ms24: true,
      },
    },
  },
  {
    translationKey: 'header.estimate',
    url: {
      de: '/de/fahrzeugbewertung',
      en: '/de/fahrzeugbewertung',
      fr: '/fr/evaluation-vehicules',
      it: '/it/valuazione-vehicoli',
    },
    showUnderMoreLinkBelow: 'sm',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: true,
        ms24: false,
      },
    },
  },
  {
    translationKey: 'header.assure',
    url: {
      de: '/de/autoversicherung',
      en: '/de/autoversicherung',
      fr: '/fr/assurance-auto',
      it: '/it/assicurazione-auto',
    },
    showUnderMoreLinkBelow: 'md',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: true,
        ms24: false,
      },
    },
  },
  {
    translationKey: 'header.assure',
    url: {
      de: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      en: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      fr: 'https://www.financescout24.ch/fr/assurance-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      it: 'https://www.financescout24.ch/it/assicurazione-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
    },
    showUnderMoreLinkBelow: 'md',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: false,
        ms24: true,
      },
    },
  },
  {
    translationKey: 'header.magazine',
    url: {
      de: 'https://guide.autoscout24.ch/de/',
      en: 'https://guide.autoscout24.ch/de/',
      fr: 'https://guide.autoscout24.ch/fr/',
      it: 'https://guide.autoscout24.ch/it/',
    },
    showUnderMoreLinkBelow: 'lg',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: true,
        ms24: false,
      },
    },
  },
  {
    translationKey: 'header.magazine',
    url: {
      de: '/de/c/h/information',
      en: '/en/c/h/information',
      fr: '/fr/c/h/information',
      it: '/it/c/h/information',
    },
    showUnderMoreLinkBelow: 'lg',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      platform: {
        as24: false,
        ms24: true,
      },
    },
  },
];

export const getHeaderLinks = (data: LinkConfig): NavigationLinkProps[] => {
  const mappedHeaderLinks = headerLinks.map((item) => {
    return resolveVisibility({
      ...data,
      item,
    });
  });

  return mappedHeaderLinks;
};

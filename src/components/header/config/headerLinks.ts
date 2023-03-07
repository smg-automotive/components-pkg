import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
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
      plattform: {
        as24: true,
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
      plattform: {
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
      plattform: {
        as24: true,
        ms24: true,
      },
    },
  },
  {
    translationKey: 'header.carSubscription',
    url: {
      de: '#', // TOPO ADD LINK
      en: '#',
      fr: '#',
      it: '#',
    },
    isNew: true,
    showUnderMoreLinkBelow: 'lg',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      plattform: {
        as24: true,
        ms24: false,
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
      plattform: {
        as24: true,
        ms24: true,
      },
    },
  },
];

export const getHeaderLinks = ({
  userType,
  plattform,
}: {
  userType: UserType;
  plattform: Plattform;
}): NavigationLinkProps[] => {
  const mappedHeaderLinks = headerLinks.map((item) => {
    return resolveVisibility({
      item,
      userType,
      plattform,
    });
  });

  return mappedHeaderLinks;
};

import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
import { NavigationLinkConfigProps, resolveVisibility } from './converter';

const headerLinks: NavigationLinkConfigProps[] = [
  {
    translationKey: 'header.sell',
    url: {
      de: '#',
      en: '#',
      fr: '#',
      it: '#',
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
      de: '#',
      en: '#',
      fr: '#',
      it: '#',
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
      de: '#',
      en: '#',
      fr: '#',
      it: '#',
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
      de: '#',
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
      de: '#',
      en: '#',
      fr: '#',
      it: '#',
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

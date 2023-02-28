import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
import { NavigationLinkConfigProps, resolveVisibility } from './converter';

const headerLinks: NavigationLinkConfigProps[] = [
  {
    text: 'Verkaufen',
    url: '#',
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
    text: 'Schätzen',
    url: '#',
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
    text: 'Versichern',
    url: '#',
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
    text: 'Auto-Abo',
    url: '#',
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
    text: 'Magazin',
    url: '#',
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

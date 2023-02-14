import { NavigationLinkConfigProps, resolveVisibility } from './converter';
import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';

const headerLinks: NavigationLinkConfigProps[] = [
  {
    text: 'Verkaufen',
    url: '#',
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

import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
import { NavigationLinkNode } from './drawerNodeItems';

export type NavigationLinkConfigProps = Omit<
  NavigationLinkProps,
  'isVisible'
> & {
  showUnderMoreLinkBelow?: string; // TODO ZIBLJIC
  visibilitySettings: {
    userType: {
      private: boolean;
      professional: boolean;
    };
    plattform: {
      as24: boolean;
      ms24: boolean;
    };
  };
};
export type NavigationLinkConfigNode = Omit<NavigationLinkNode, 'items'> & {
  items: NavigationLinkConfigProps[];
};

const convertNavigationItem = ({
  item,
  isVisible,
}: {
  item: NavigationLinkConfigProps;
  isVisible: boolean;
}): NavigationLinkProps => {
  return {
    text: item.text,
    url: item.url,
    isNew: item.isNew,
    iconRight: item.iconRight,
    isVisible,
    showUnderMoreLinkBelow: item.showUnderMoreLinkBelow,
  };
};

export const resolveVisibility = ({
  item,
  userType,
  plattform,
}: {
  item: NavigationLinkConfigProps;
  userType: UserType;
  plattform: Plattform;
}): NavigationLinkProps => {
  if (!item.visibilitySettings.plattform[plattform]) {
    return convertNavigationItem({ item, isVisible: false });
  }

  // Add in entitlements in here

  if (!item.visibilitySettings.userType[userType]) {
    return convertNavigationItem({ item, isVisible: false });
  }

  return convertNavigationItem({ item, isVisible: true });
};

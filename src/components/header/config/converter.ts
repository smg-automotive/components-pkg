import { Language } from '@smg-automotive/i18n-pkg';

import { replaceParameters } from 'src/utilities/replacePathParameters';
import { BreakpointName } from 'src/themes/shared/breakpoints';

import { NavigationLinkProps } from '../NavigationLink';
import { Platform, UserType } from '..';
import { NavigationLinkNode } from './drawerNodeItems';

export type NavigationLinkConfigProps = Omit<
  NavigationLinkProps,
  'isVisible'
> & {
  showUnderMoreLinkBelow?: BreakpointName;
  color?: string;
  visibilitySettings: {
    userType: {
      private: boolean;
      professional: boolean;
    };
    platform: {
      as24: boolean;
      ms24: boolean;
    };
  };
};

export type NavigationLinkConfigNode = Omit<NavigationLinkNode, 'items'> & {
  items: NavigationLinkConfigProps[];
};

const constructUrls = ({
  item,
  urlPathParams,
  domain,
  useAbsoluteUrls,
}: {
  item: NavigationLinkConfigProps;
  urlPathParams?: Record<string, string | number> | null;
  domain: string;
  useAbsoluteUrls: boolean;
}) => {
  const urls = {} as Record<Language, string>;

  for (const language in item.url) {
    let path = item.url[language as Language];
    if (urlPathParams) {
      path = replaceParameters({
        path,
        params: urlPathParams,
      });
    }
    const isAlreadyAbsolute = path?.substring(0, 4) === 'http';

    if (isAlreadyAbsolute) {
      urls[language as Language] = path;
    } else {
      const baseUrl = useAbsoluteUrls && domain ? `https://${domain}` : '';
      const url = `${baseUrl}${path}`;
      urls[language as Language] = url;
    }
  }

  return urls;
};

export interface ConvertNavigationItemData {
  item: NavigationLinkConfigProps;
  isVisible: boolean;
  urlPathParams: Record<string, string | number> | null;
  domain: string;
  useAbsoluteUrls: boolean;
}

export const convertNavigationItem = (
  data: ConvertNavigationItemData
): NavigationLinkProps => {
  const itemUrls = constructUrls(data);

  return {
    translationKey: data.item.translationKey,
    url: itemUrls,
    isNew: data.item.isNew,
    iconRight: data.item.iconRight,
    color: data.item.color,
    isVisible: data.isVisible,
    showUnderMoreLinkBelow: data.item.showUnderMoreLinkBelow,
  };
};

export const resolveVisibility = (
  data: Omit<ConvertNavigationItemData, 'isVisible'> & {
    userType: UserType | null;
    platform: Platform;
  }
): NavigationLinkProps => {
  if (!data.item.visibilitySettings.platform[data.platform]) {
    return convertNavigationItem({ ...data, isVisible: false });
  }

  // Add in entitlements in here

  if (data.userType && !data.item.visibilitySettings.userType[data.userType]) {
    return convertNavigationItem({
      ...data,
      isVisible: false,
    });
  }

  return convertNavigationItem({ ...data, isVisible: true });
};

import { ReactNode } from 'react';
import { Auth0UserType, type EnrichedSessionUser } from '@smg-automotive/auth';

import { replaceParameters } from 'src/utilities/replacePathParameters';
import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import {
  EntitlementConfig,
  LinkConfig,
  LinkInstance,
  LocalizedLinks,
} from 'src/components/navigation/link';
import { BaseConfig } from 'src/components/navigation/BaseConfig';

import { UserTypeExternal } from '../types';
import { IconItems, IconItemsConfig, IconItemsLinks } from './iconItems';
import { HeaderNavigationLink } from './headerNavigationLink';
import { NavigationLinkConfigProps } from './headerLinks';
import {
  DrawerNodeItems,
  DrawerNodeItemsConfig,
  NavigationLinkConfigNode,
} from './DrawerNodeItems';

export const menuHeightConfig = '60px';

export interface HeaderNavigationLinkInstance extends LinkInstance {
  isNew: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  userAvatar?: ReactNode;
}

export interface HeaderNavigationLinkConfig extends LinkConfig {
  isNew?: boolean;
  rightIcon?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
  color?: string;
  userAvatar?: ReactNode;
}

interface HeaderNavigationConfigInterface {
  headerItems: NavigationLinkConfigProps[];
  drawerItems: DrawerNodeItemsConfig;
  iconItems: IconItemsConfig;
}

interface HeaderNavigationConfigInstance {
  homeUrl: string;
  menuHeight: string;
  user: EnrichedSessionUser | null;
  headerItems: HeaderNavigationLink[];
  drawerItems: DrawerNodeItems;
  iconItems: IconItemsLinks;
}

export class HeaderNavigationConfig extends BaseConfig<HeaderNavigationConfigInstance> {
  config: HeaderNavigationConfigInterface;
  homeUrl: string;
  menuHeight: string;
  user: EnrichedSessionUser | null;
  userType: UserTypeExternal.Guest | Auth0UserType;
  mappedConfig?: HeaderNavigationConfigInstance;
  urlPathParams?: Record<string, string | number>;

  constructor({
    brand,
    environment,
    useAbsoluteUrls,
    project,
    config,
    user,
    urlPathParams,
  }: {
    brand: Brand;
    environment?: Environment;
    project?: Project;
    useAbsoluteUrls?: boolean;
    config: HeaderNavigationConfigInterface;
    user: EnrichedSessionUser | null;
    urlPathParams?: Record<string, string | number>;
  }) {
    const entitlements = Object.keys(user?.entitlements || {});
    super({ brand, environment, useAbsoluteUrls, project, entitlements });
    this.config = config;
    this.homeUrl = '/';
    this.menuHeight = menuHeightConfig;
    this.user = user;
    this.userType = user ? user.userType : UserTypeExternal.Guest;
    this.urlPathParams = urlPathParams;
  }

  getMappedConfig(): HeaderNavigationConfigInstance {
    if (this.mappedConfig) return this.mappedConfig;

    const mappedConfig = {
      homeUrl: this.homeUrl,
      menuHeight: this.menuHeight,
      user: this.user,
      headerItems: this.getHeaderLinks(),
      drawerItems: this.getDrawerNodeItems(),
      iconItems: this.getIconItems(),
    };

    this.mappedConfig = mappedConfig;
    return this.mappedConfig;
  }

  replacePathParams = (
    link: LocalizedLinks | undefined,
  ): LocalizedLinks | undefined => {
    if (link && this.urlPathParams) {
      return Object.entries(link).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: replaceParameters({
            path: value,
            params: this.urlPathParams,
          }),
        };
      }, {} as LocalizedLinks);
    }

    return link;
  };

  mapEntitlementConfig(entitlementConfig: EntitlementConfig) {
    return {
      ...entitlementConfig,
      missingEntitlementFallbackLink: this.replacePathParams(
        entitlementConfig.missingEntitlementFallbackLink,
      ),
    };
  }

  mapLink(link: HeaderNavigationLinkConfig) {
    const { entitlementConfig } = link;

    return new HeaderNavigationLink({
      config: {
        title: link.title,
        translationKey: link.translationKey,
        translationParameters: link.translationParameters,
        link: this.replacePathParams(link.link),
        onClick: link.onClick,
        target: undefined,
        visibilitySettings: link.visibilitySettings,
        entitlementConfig:
          entitlementConfig && this.mapEntitlementConfig(entitlementConfig),
        projectIdentifier: link.projectIdentifier,
      },
      forceMotoscoutLink: link.forceMotoscoutLink,
      forceAutoscoutLink: link.forceAutoscoutLink,
      brand: this.brand,
      userType: this.userType,
      environment: this.environment,
      useAbsoluteUrls: this.useAbsoluteUrls,
      project: this.project,
      linkProtocol: this.linkProtocol,
      domains: this.domains,
      isNew: link.isNew,
      rightIcon: link.rightIcon,
      showUnderMoreLinkBelow: link.showUnderMoreLinkBelow,
      fontWeight: link.fontWeight,
      variant: link.variant,
      color: link.color,
      userAvatar: link.userAvatar,
      userEntitlements: this.entitlements,
    });
  }

  getHeaderLinks = (): HeaderNavigationLink[] => {
    return this.config.headerItems
      .map((link) => this.mapLink(link))
      .filter((item) => item.isVisible);
  };

  getIconItems = (): IconItemsLinks => {
    return Object.keys(this.config.iconItems).reduce(
      (previousValue, currentValue) => {
        const linkToMap = this.config.iconItems[currentValue as IconItems];
        previousValue[currentValue as IconItems] = linkToMap
          ? this.mapLink(linkToMap)
          : null;
        return previousValue;
      },
      {} as IconItemsLinks,
    );
  };

  getDrawerNodeItems = (): DrawerNodeItems => {
    const itemsEntires = Object.entries(this.config.drawerItems);
    const mappedEntries = this.mapDrawerItemsEntries(itemsEntires);

    return Object.fromEntries(mappedEntries);
  };

  mapDrawerItemsEntries = (
    itemsEntires: [string, NavigationLinkConfigNode[]][],
  ) =>
    itemsEntires.map(([nodeKey, nodes]) => {
      const mappedNodes = this.mapDrawerNodes(nodes);

      return [nodeKey, mappedNodes];
    });

  mapDrawerNodes = (nodeEntry: NavigationLinkConfigNode[]) =>
    nodeEntry.map((node) => {
      const mappedItems = this.mapDrawerNodeItems(node.items);

      return {
        ...node,
        items: mappedItems,
      };
    });

  mapDrawerNodeItems = (
    items: NavigationLinkConfigProps[],
  ): HeaderNavigationLink[] => {
    return items
      .map((item) => this.mapLink(item))
      .filter((item) => item.isVisible);
  };
}

import { ReactNode } from 'react';

import { MappedUserType, MergedUser } from '@smg-automotive/auth';

import { replaceParameters } from 'src/utilities/replacePathParameters';
import { Environment } from 'src/types/environment';
import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { BreakpointName } from 'src/themes/shared/breakpoints';
import {
  EntitlementConfig,
  LinkConfig,
  LinkInstance,
  LocalizedLinks,
} from 'src/components/navigation/link';
import { BaseConfig } from 'src/components/navigation/BaseConfig';

import { UserType } from '../types';
import { HeaderNavigationLink } from './headerNavigationLink';
import { NavigationLinkConfigProps } from './headerLinks';
import {
  DrawerNodeItems,
  DrawerNodeItemsConfig,
  NavigationLinkConfigNode,
} from './DrawerNodeItems';

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
}

interface HeaderNavigationConfigInstance {
  homeUrl: string;
  menuHeight: string;
  user: MergedUser | null;
  headerItems: HeaderNavigationLink[];
  drawerItems: DrawerNodeItems;
}

export class HeaderNavigationConfig extends BaseConfig<HeaderNavigationConfigInstance> {
  config: HeaderNavigationConfigInterface;
  homeUrl: string;
  menuHeight: string;
  user: MergedUser | null;
  userType: UserType.Guest | MappedUserType;
  mappedConfig?: HeaderNavigationConfigInstance;
  urlPathParams?: Record<string, string | number>;

  constructor({
    brand,
    environment,
    useAbsoluteUrls,
    config,
    user,
    urlPathParams,
    entitlements = [],
  }: {
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
    config: HeaderNavigationConfigInterface;
    user: MergedUser | null;
    urlPathParams?: Record<string, string | number>;
    entitlements?: Entitlement[];
  }) {
    super({ brand, environment, useAbsoluteUrls, entitlements });
    this.config = config;
    this.homeUrl = '/';
    this.menuHeight = '60px';
    this.user = user;
    this.userType = user ? user.userType : UserType.Guest;
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
      missingEntitlementFallbackLink: this.replacePathParams(
        entitlementConfig.missingEntitlementFallbackLink,
      ),
      missingEntitlementLinkIcon: entitlementConfig.missingEntitlementLinkIcon,
      requiredEntitlement: entitlementConfig.requiredEntitlement,
    } as EntitlementConfig;
  }

  mapLink(link: HeaderNavigationLinkConfig) {
    const { entitlementConfig } = link;

    const hasEntitlement = entitlementConfig
      ? this.entitlements?.includes(entitlementConfig.requiredEntitlement)
      : false;

    return new HeaderNavigationLink({
      config: {
        translationKey: link.translationKey,
        link: this.replacePathParams(link.link),
        onClick: link.onClick,
        target: undefined,
        visibilitySettings: link.visibilitySettings,
        entitlementConfig:
          entitlementConfig && this.mapEntitlementConfig(entitlementConfig),
      },
      isInternal: link.isInternal ? link.isInternal : false,
      forceMotoscoutLink: link.forceMotoscoutLink,
      forceAutoscoutLink: link.forceAutoscoutLink,
      brand: this.brand,
      userType: this.userType,
      environment: this.environment,
      useAbsoluteUrls: this.useAbsoluteUrls,
      linkProtocol: this.linkProtocol,
      domains: this.domains,
      isNew: link.isNew,
      rightIcon: link.rightIcon,
      showUnderMoreLinkBelow: link.showUnderMoreLinkBelow,
      fontWeight: link.fontWeight,
      variant: link.variant,
      color: link.color,
      userAvatar: link.userAvatar,
      hasEntitlement,
    });
  }

  getHeaderLinks = (): HeaderNavigationLink[] => {
    return this.config.headerItems
      .map((link) => this.mapLink(link))
      .filter((item) => item.isVisible);
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

import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { Environment } from 'src/types/environment';
import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { UserType } from './header/types';

export type LinkTargets = '_blank';

export interface VisibilitySettings {
  brand: Record<Brand, boolean>;
  userType?: {
    private: boolean;
    professional: boolean;
    guest?: boolean;
  };
}
export type LocalizedLinks = Record<Language, string>;

export interface LinkConfig {
  translationKey?: string;
  link?: LocalizedLinks;
  missingEntitlementFallbackLink?: LocalizedLinks;
  missingEntitlementLinkIcon?: ReactNode;
  onClick?: () => void;
  target?: LinkTargets;
  visibilitySettings: VisibilitySettings;
  requiredEntitlement?: Entitlement;
}

export interface LinkInstance {
  translationKey?: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  isVisible: boolean;
  onClick?: () => void;
}

// !!CMP Link
export class Link {
  translationKey?: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  onClick?: () => void;
  isVisible: boolean;

  constructor({
    config,
    brand,
    userType,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
    hasEntitlement = false,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Record<Brand, Record<Environment, string>>;
    hasEntitlement?: boolean;
  }) {
    this.translationKey = config.translationKey;
    this.target = config.target;
    this.onClick = config.onClick;
    this.isVisible = Link.determineVisibility({
      visibilitySettings: config.visibilitySettings,
      brand,
      userType,
    });

    const link = this.resolveLink({ hasEntitlement, config });

    this.link = this.prefixDomain({
      link,
      brand,
      environment,
      useAbsoluteUrls,
      linkProtocol,
      domains,
    });
  }

  private resolveLink({
    hasEntitlement,
    config,
  }: {
    hasEntitlement: boolean;
    config: LinkConfig;
  }) {
    return !hasEntitlement && config.missingEntitlementFallbackLink
      ? config.missingEntitlementFallbackLink
      : config.link;
  }

  private prefixDomain({
    link,
    brand,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
  }: {
    link?: LocalizedLinks;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Record<Brand, Record<Environment, string>>;
  }) {
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (!useAbsoluteUrls || !link || isAlreadyAbsolute) return link;

    const domain = domains[brand][environment];
    const baseUrl = `${linkProtocol}://${domain}`;

    return {
      de: `${baseUrl}${link.de}`,
      fr: `${baseUrl}${link.fr}`,
      it: `${baseUrl}${link.it}`,
      en: `${baseUrl}${link.en}`,
    };
  }

  private static determineVisibility({
    visibilitySettings,
    brand,
    userType,
  }: {
    visibilitySettings: VisibilitySettings;
    brand: Brand;
    userType?: UserType;
  }) {
    if (!visibilitySettings.brand[brand]) {
      return false;
    }

    if (
      userType === UserType.Guest &&
      visibilitySettings.userType &&
      visibilitySettings.userType[userType] !== undefined
    ) {
      return !!visibilitySettings.userType[userType];
    }

    return !(
      userType &&
      userType !== UserType.Guest &&
      visibilitySettings.userType &&
      !visibilitySettings.userType[userType]
    );
  }
}

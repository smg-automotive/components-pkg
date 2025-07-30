import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { Auth0UserType } from '@smg-automotive/auth';

import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { UserTypeExternal } from './header/types';

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

export interface EntitlementConfig {
  singleRequiredEntitlement: Entitlement[];
  missingEntitlementFallbackLink?: LocalizedLinks;
  missingEntitlementLinkIcon?: ReactNode;
  missingEntitlementTranslationKey?: string;
  hideIfEntitlementIsPresent?: Entitlement;
  hideIfRequiredEntitlementIsMissing?: boolean;
}

export interface LinkConfig {
  title?: string;
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  link?: LocalizedLinks;
  onClick?: () => void;
  target?: LinkTargets;
  visibilitySettings: VisibilitySettings;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;
  entitlementConfig?: EntitlementConfig;
  projectIdentifier?: Project;
}

export interface LinkInstance {
  title?: string;
  translationKey?: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  isVisible: boolean;
  onClick?: () => void;
}

export type Domains = Record<Brand, Record<Environment, string>>;
export class Link {
  title?: string;
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  link?: LocalizedLinks;
  target?: LinkTargets;
  onClick?: () => void;
  isVisible: boolean;
  rightIcon?: ReactNode;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;
  projectIdentifier?: Project;

  constructor({
    config,
    brand,
    userType,
    environment,
    useAbsoluteUrls,
    project,
    linkProtocol,
    domains,
    forceMotoscoutLink,
    forceAutoscoutLink,
    userEntitlements = [],
    rightIcon,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserTypeExternal.Guest | Auth0UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    project?: Project;
    linkProtocol: string;
    domains: Domains;
    forceMotoscoutLink?: boolean;
    forceAutoscoutLink?: boolean;
    userEntitlements?: string[];
    rightIcon?: ReactNode;
  }) {
    this.target = config.target;
    this.onClick = config.onClick;
    this.projectIdentifier = config.projectIdentifier;

    const hasEntitlement = config.entitlementConfig
      ? config.entitlementConfig.singleRequiredEntitlement.some((entitlement) =>
          userEntitlements.includes(entitlement),
        )
      : true;

    this.isVisible = Link.determineVisibility({
      userEntitlements,
      entitlementConfig: config.entitlementConfig,
      hasEntitlement,
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
      project,
      linkProtocol,
      domains,
      forceMotoscoutLink,
      forceAutoscoutLink,
      userType,
    });

    this.rightIcon = Link.shouldDisplayMissingEntitlementIcon(
      hasEntitlement,
      config.entitlementConfig,
    )
      ? config.entitlementConfig?.missingEntitlementLinkIcon
      : rightIcon;

    this.title = config.title;
    this.translationKey = Link.shouldDisplayMissingEntitlementTranslation(
      hasEntitlement,
      config.entitlementConfig,
    )
      ? config.entitlementConfig?.missingEntitlementTranslationKey
      : config.translationKey;
    this.translationParameters = config.translationParameters;
  }

  private static shouldDisplayMissingEntitlementTranslation(
    hasEntitlement: boolean,
    entitlementConfig?: EntitlementConfig,
  ) {
    return (
      !hasEntitlement && !!entitlementConfig?.missingEntitlementTranslationKey
    );
  }

  private static shouldDisplayMissingEntitlementIcon(
    hasEntitlement: boolean,
    entitlementConfig?: EntitlementConfig,
  ) {
    return !hasEntitlement && !!entitlementConfig?.missingEntitlementLinkIcon;
  }

  private resolveLink({
    hasEntitlement,
    config: { link, entitlementConfig },
  }: {
    hasEntitlement: boolean;
    config: LinkConfig;
  }) {
    return !hasEntitlement && entitlementConfig?.missingEntitlementFallbackLink
      ? entitlementConfig.missingEntitlementFallbackLink
      : link;
  }

  private prefixDomain({
    link,
    brand,
    environment,
    useAbsoluteUrls,
    project,
    linkProtocol,
    forceMotoscoutLink = false,
    forceAutoscoutLink = false,
    domains,
  }: {
    link?: LocalizedLinks;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
    project?: Project;
    linkProtocol: string;
    domains: Domains;
    forceMotoscoutLink?: boolean;
    forceAutoscoutLink?: boolean;
    userType?: UserTypeExternal.Guest | Auth0UserType;
  }) {
    const forceBrandDomain = () => {
      if (forceAutoscoutLink) {
        return Brand.AutoScout24;
      } else if (forceMotoscoutLink) {
        return Brand.MotoScout24;
      } else {
        return brand;
      }
    };
    const forceBrand = forceBrandDomain();
    const domain = domains[forceBrand][environment];
    const baseUrl = `${linkProtocol}://${domain}`;
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (link && (forceAutoscoutLink || forceMotoscoutLink)) {
      return {
        de: `${baseUrl}${link.de}`,
        fr: `${baseUrl}${link.fr}`,
        it: `${baseUrl}${link.it}`,
        en: `${baseUrl}${link.en}`,
      };
    }
    const isLinkTargetInSameProject =
      project && this.projectIdentifier && project === this.projectIdentifier;
    if (
      !useAbsoluteUrls ||
      !link ||
      isAlreadyAbsolute ||
      isLinkTargetInSameProject
    ) {
      return link;
    }

    return {
      de: `${baseUrl}${link.de}`,
      fr: `${baseUrl}${link.fr}`,
      it: `${baseUrl}${link.it}`,
      en: `${baseUrl}${link.en}`,
    };
  }

  private static determineVisibility({
    hasEntitlement,
    visibilitySettings,
    brand,
    userType,
    userEntitlements,
    entitlementConfig,
  }: {
    hasEntitlement: boolean;
    visibilitySettings: VisibilitySettings;
    brand: Brand;
    userType?: UserTypeExternal.Guest | Auth0UserType;
    userEntitlements: string[];
    entitlementConfig?: EntitlementConfig;
  }) {
    if (!visibilitySettings.brand[brand]) {
      return false;
    }

    const hasRestrictedEntitlement = Link.hasRestrictedEntitlement({
      entitlementConfig,
      userEntitlements,
    });

    if (hasRestrictedEntitlement) {
      return false;
    }

    const hideIfRequiredEntitlementIsMissing =
      Link.hideIfRequiredEntitlementIsMissing({
        hasEntitlement,
        entitlementConfig,
      });

    if (hideIfRequiredEntitlementIsMissing) {
      return false;
    }

    // This scenario is essential when dealing with guest users. The guest user
    // type was introduced at a later stage. Rather than modifying visibility
    // settings for the guest user type across all link nodes, our goal is to
    // selectively hide a single link in the navigation for guest users.
    if (userType && visibilitySettings?.userType?.[userType] !== undefined) {
      return !!visibilitySettings.userType[userType];
    }

    return true;
  }

  private static hasRestrictedEntitlement({
    entitlementConfig,
    userEntitlements,
  }: {
    entitlementConfig?: EntitlementConfig;
    userEntitlements: string[];
  }) {
    return entitlementConfig && entitlementConfig.hideIfEntitlementIsPresent
      ? userEntitlements.includes(entitlementConfig.hideIfEntitlementIsPresent)
      : false;
  }

  private static hideIfRequiredEntitlementIsMissing({
    hasEntitlement,
    entitlementConfig,
  }: {
    hasEntitlement: boolean;
    entitlementConfig?: EntitlementConfig;
  }) {
    return (
      !hasEntitlement && entitlementConfig?.hideIfRequiredEntitlementIsMissing
    );
  }
}

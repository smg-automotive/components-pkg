import { ReactNode } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { MappedUserType } from '@smg-automotive/auth';

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
  isInternal?: boolean;
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
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  link?: LocalizedLinks;
  onClick?: () => void;
  target?: LinkTargets;
  visibilitySettings: VisibilitySettings;
  isInternal?: boolean;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;
  entitlementConfig?: EntitlementConfig;
}

export interface LinkInstance {
  translationKey?: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  isVisible: boolean;
  onClick?: () => void;
}

export type Domains =
  | Record<Brand, Record<'main', Record<Environment, string>>>
  | Record<
      Brand,
      Record<
        'internal',
        Record<'professional' | 'private', Record<Environment, string>>
      >
    >;

// !!CMP Link
export class Link {
  translationKey?: string;
  translationParameters?: Record<string, string | number>;
  link?: LocalizedLinks;
  target?: LinkTargets;
  onClick?: () => void;
  isVisible: boolean;
  rightIcon?: ReactNode;
  isInternal?: boolean;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;

  constructor({
    config,
    brand,
    userType,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
    isInternal,
    forceMotoscoutLink,
    forceAutoscoutLink,
    userEntitlements = [],
    rightIcon,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserTypeExternal.Guest | MappedUserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Domains;
    isInternal?: boolean;
    forceMotoscoutLink?: boolean;
    forceAutoscoutLink?: boolean;
    userEntitlements?: string[];
    rightIcon?: ReactNode;
  }) {
    this.target = config.target;
    this.onClick = config.onClick;

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
      linkProtocol,
      domains,
      isInternal,
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
    linkProtocol,
    isInternal = false,
    forceMotoscoutLink = false,
    forceAutoscoutLink = false,
    userType,
    domains,
  }: {
    link?: LocalizedLinks;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Domains;
    isInternal?: boolean;
    forceMotoscoutLink?: boolean;
    forceAutoscoutLink?: boolean;
    userType?: UserTypeExternal.Guest | MappedUserType;
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

    const domain =
      !isInternal || !userType || userType === UserTypeExternal.Guest
        ? (domains[forceBrand] as Record<'main', Record<Environment, string>>)[
            'main'
          ][environment]
        : (
            domains[forceBrand] as Record<
              'internal',
              Record<'professional' | 'private', Record<Environment, string>>
            >
          )['internal'][
            userType as MappedUserType.Private | MappedUserType.Professional
          ][environment];
    const baseUrl = `${linkProtocol}://${domain}`;
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (link && (isInternal || forceAutoscoutLink || forceMotoscoutLink)) {
      return {
        de: `${baseUrl}${link.de}`,
        fr: `${baseUrl}${link.fr}`,
        it: `${baseUrl}${link.it}`,
        en: `${baseUrl}${link.en}`,
      };
    }
    if (!useAbsoluteUrls || !link || isAlreadyAbsolute) return link;

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
    userType?: UserTypeExternal.Guest | MappedUserType;
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

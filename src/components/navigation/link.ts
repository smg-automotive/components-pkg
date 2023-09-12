import { Language } from '@smg-automotive/i18n-pkg';

import { Environment } from 'src/types/environment';
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
  isInternal?: boolean;
}
export type LocalizedLinks = Record<Language, string>;

export interface LinkConfig {
  translationKey?: string;
  link?: LocalizedLinks;
  onClick?: () => void;
  target?: LinkTargets;
  visibilitySettings: VisibilitySettings;
  isInternal?: boolean;
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
    isInternal,
  }: {
    config: LinkConfig;
    brand: Brand;
    userType?: UserType;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains:
      | Record<Brand, Record<'main', Record<Environment, string>>>
      | Record<
          Brand,
          Record<
            'internal',
            Record<'professional' | 'private', Record<Environment, string>>
          >
        >;
    isInternal?: boolean;
  }) {
    this.translationKey = config.translationKey;
    this.target = config.target;
    this.onClick = config.onClick;
    this.isVisible = Link.determineVisibility({
      visibilitySettings: config.visibilitySettings,
      brand,
      userType,
    });

    this.link = this.prefixDomain({
      link: config.link,
      brand,
      environment,
      useAbsoluteUrls,
      linkProtocol,
      domains,
      isInternal,
      userType,
    });
  }

  private prefixDomain({
    link,
    brand,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
    isInternal = false,
    userType,
  }: {
    link?: LocalizedLinks;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains:
      | Record<Brand, Record<'main', Record<Environment, string>>>
      | Record<
          Brand,
          Record<
            'internal',
            Record<'professional' | 'private', Record<Environment, string>>
          >
        >;
    isInternal?: boolean;
    userType?: UserType;
  }) {
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (!useAbsoluteUrls || !link || isAlreadyAbsolute) return link;

    const domain = isInternal
      ? (
          domains[brand] as Record<
            'internal',
            Record<'professional' | 'private', Record<Environment, string>>
          >
        )['internal'][userType as UserType.Private | UserType.Professional][
          environment
        ]
      : (domains[brand] as Record<'main', Record<Environment, string>>)['main'][
          environment
        ];

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

import { Language } from '@smg-automotive/i18n-pkg';

import { Environment } from '../../../types/environment';
import { Brand } from '../../../types/brand';
import { Link, LinkConfig, LinkTargets } from './link';

import { FooterConfigInterface } from '.';

type LocalizedLinks = Record<Language, string>;

export interface LinkInstance {
  translationKey: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  isVisible: boolean;
  onClick?: () => void;
}

interface LinkSectionConfig {
  title: LinkConfig[];
  items: LinkConfig[];
}

export interface FooterConfigSection {
  title: LinkInstance[];
  items: LinkInstance[];
}

export interface FooterConfigInstance {
  sections: FooterConfigSection[];
  apps: {
    android: LinkInstance[];
    apple: LinkInstance[];
  };
  socialMedia: {
    facebook: LinkInstance[];
    instagram: LinkInstance[];
    twitter: LinkInstance[];
    youtube: LinkInstance[];
  };
  companies: LinkInstance[];
}
export class FooterConfig {
  brand: Brand;
  config: FooterConfigInterface;
  environment: Environment;
  useAbsoluteUrls: boolean;
  mappedConfig?: FooterConfigInstance;
  linkProtocol: string;
  domains: Record<Brand, Record<Environment, string>>;

  constructor({
    config,
    brand,
    environment = 'production',
    useAbsoluteUrls = false,
  }: {
    config: FooterConfigInterface;
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
  }) {
    this.brand = brand;
    this.config = config;
    this.environment = environment;
    this.useAbsoluteUrls = useAbsoluteUrls;
    this.domains = {
      as24: {
        production: 'www.autoscout24.ch',
        preprod: 'int.autoscout24.ch',
      },
      ms24: {
        production: 'www.motoscout24.ch',
        preprod: 'int.motoscout24.ch',
      },
    };
    this.linkProtocol = 'https';
  }

  getMappedConfig(): FooterConfigInstance {
    if (this.mappedConfig) return this.mappedConfig;

    const mappedConfig = {
      sections: this.config.sections.map(this.mapSectionConfig.bind(this)),

      apps: {
        android: this.mapLinkArray(this.config.apps.android),
        apple: this.mapLinkArray(this.config.apps.apple),
      },
      socialMedia: {
        facebook: this.mapLinkArray(this.config.socialMedia.facebook),
        instagram: this.mapLinkArray(this.config.socialMedia.instagram),
        twitter: this.mapLinkArray(this.config.socialMedia.twitter),
        youtube: this.mapLinkArray(this.config.socialMedia.youtube),
      },
      companies: this.mapLinkArray(this.config.companies),
    };
    this.mappedConfig = mappedConfig;
    return this.mappedConfig;
  }

  private mapSectionConfig(section: LinkSectionConfig) {
    const mappedSection = {
      title: this.mapLinkArray(section.title),
      items: this.mapLinkArray(section.items),
    };

    return mappedSection;
  }

  private mapLinkArray(linkConfigArray: LinkConfig[]): LinkInstance[] {
    return linkConfigArray
      .map((linkConfig) => this.mapLink(linkConfig))
      .filter((item) => item.isVisible);
  }

  private mapLink(config: LinkConfig): LinkInstance {
    return new Link({
      config,
      brand: this.brand,
      environment: this.environment,
      useAbsoluteUrls: this.useAbsoluteUrls,
      linkProtocol: this.linkProtocol,
      domains: this.domains,
    });
  }
}

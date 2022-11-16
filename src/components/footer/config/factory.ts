import { Language } from '@smg-automotive/i18n-pkg';

import { Link, LinkConfig, LinkTargets } from './link';
import { Environment } from '../../../types/environment';
import { Brand } from '../../../types/brand';

import { FooterConfigInterface } from '.';

type LocalizedLinks = Record<Language, string>;

export interface LinkInstance {
  translationKey: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  isVisible: boolean;
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
    });
  }
}

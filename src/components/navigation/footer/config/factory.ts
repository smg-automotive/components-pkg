import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { Link, LinkConfig, LinkInstance } from 'src/components/navigation/link';
import { BaseConfig } from 'src/components/navigation/BaseConfig';

import { FooterConfigInterface } from '.';

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
    linkedin: LinkInstance[];
    youtube: LinkInstance[];
  };
  companies: LinkInstance[];
}
export class FooterConfig extends BaseConfig<FooterConfigInstance> {
  config: FooterConfigInterface;
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
    super({ brand, environment, useAbsoluteUrls });
    this.config = config;
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
        linkedin: this.mapLinkArray(this.config.socialMedia.linkedin),
        youtube: this.mapLinkArray(this.config.socialMedia.youtube),
      },
      companies: this.mapLinkArray(this.config.companies),
    };
    this.mappedConfig = mappedConfig;
    return this.mappedConfig;
  }

  private mapSectionConfig(section: LinkSectionConfig) {
    return {
      title: this.mapLinkArray(section.title),
      items: this.mapLinkArray(section.items),
    };
  }

  private mapLinkArray(linkConfigArray: LinkConfig[]): LinkInstance[] {
    return linkConfigArray
      .map((linkConfig) => this.mapLink(linkConfig))
      .filter((item) => item.isVisible);
  }

  mapLink(config: LinkConfig): LinkInstance {
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

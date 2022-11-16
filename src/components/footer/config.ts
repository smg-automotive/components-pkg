import { Brand } from '../../types/brand';

interface VisibilitySettings {
  brand: {
    as24: boolean;
    ms24: boolean;
  };
}

interface LinkConfigLocalizedLinks {
  en: string;
  de: string;
  fr: string;
  it: string;
}

interface LinkConfig {
  translationKey: string;
  link?: never | LinkConfigLocalizedLinks;
  target?: never | '_blank';
  visibilitySettings: VisibilitySettings;
}

interface LinkInstance {
  translationKey: string;
  link?:
    | never
    | {
        en: string;
        de: string;
        fr: string;
        it: string;
      };
  target?: never | '_blank';
  isVisible: boolean;
}

interface LinkSectionConfig {
  title: LinkConfig[];
  items: LinkConfig[];
}

interface FooterConfigInterface {
  sections: LinkSectionConfig[];
  apps: {
    android: LinkConfig[];
    apple: LinkConfig[];
  };
  socialMedia: {
    facebook: LinkConfig[];
    instagram: LinkConfig[];
    twitter: LinkConfig[];
    youtube: LinkConfig[];
  };
  companies: LinkConfig[];
}

interface FooterConfigInstance {
  sections: { title: LinkInstance[]; items: LinkInstance[] }[];
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

export const footerConfig: FooterConfigInterface = {
  sections: [
    {
      title: [
        {
          translationKey: 'footer.as24.sections.brand.title',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
        },
        {
          translationKey: 'footer.ms24.sections.brand.title',
          visibilitySettings: {
            brand: { as24: false, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.brand.advancedSearch',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/auto/suche', // TODO: do they work relative???
            en: '/auto/suche',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.dealerSearch',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-haendler-garage/suche',
            en: '/de/auto-haendler-garage/suche',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.makes',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-marken',
            en: '/de/auto-marken',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.models',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-modelle',
            en: '/de/auto-modelle',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.insurance',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            en: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            fr: 'TODO',
            it: 'TODO',
          },
          target: '_blank',
        },
      ],
    },
  ],
  apps: {
    android: [],
    apple: [],
  },
  socialMedia: {
    facebook: [],
    instagram: [],
    twitter: [],
    youtube: [],
  },
  companies: [],
};

export class FooterConfig {
  brand: Brand;
  config: FooterConfigInterface;
  mappedConfig: null | FooterConfigInstance;
  isProduction: boolean;
  useAbsoluteUrls: boolean;

  constructor({
    config,
    brand,
    isProduction = false, // TODO: switch default before merge
    useAbsoluteUrls = true, // TODO: switch default before merge
  }: {
    config: FooterConfigInterface;
    brand: Brand;
    isProduction?: boolean;
    useAbsoluteUrls?: boolean;
  }) {
    this.brand = brand;
    this.config = config;
    this.isProduction = isProduction;
    this.useAbsoluteUrls = useAbsoluteUrls;

    this.mappedConfig = null;
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
    return linkConfigArray.map((linkConfig) => this.mapLink(linkConfig));
  }

  private mapLink(config: LinkConfig): LinkInstance {
    return new Link({
      config,
      brand: this.brand,
      isProduction: this.isProduction,
      useAbsoluteUrls: this.useAbsoluteUrls,
    });
  }
}

// !!CMP Link
class Link {
  translationKey: string;
  link?:
    | never
    | {
        en: string;
        de: string;
        fr: string;
        it: string;
      };
  target?: never | '_blank';
  isVisible: boolean;
  linkProtocol: string;
  productionDomains: {
    as24: string;
    ms24: string;
  };
  preProductionDomains: {
    as24: string;
    ms24: string;
  };

  constructor({
    config,
    brand,
    isProduction,
    useAbsoluteUrls,
  }: {
    config: LinkConfig;
    brand: Brand;
    isProduction: boolean;
    useAbsoluteUrls: boolean;
  }) {
    this.translationKey = config.translationKey;
    this.target = config.target;
    this.isVisible = Link.determineVisibility({
      visibilitySettings: config.visibilitySettings,
      brand,
    });
    this.productionDomains = {
      as24: 'www.autoscout24.ch',
      ms24: 'www.motoscout24.ch',
    };
    this.preProductionDomains = {
      as24: 'int.autoscout24.ch',
      ms24: 'int.motoscout24.ch',
    };
    this.linkProtocol = 'https';
    this.link = this.prefixDomain({
      link: config.link,
      brand,
      isProduction,
      useAbsoluteUrls,
    });
  }

  private prefixDomain({
    link,
    brand,
    isProduction,
    useAbsoluteUrls,
  }: {
    link?: LinkConfigLocalizedLinks;
    brand: Brand;
    isProduction: boolean;
    useAbsoluteUrls: boolean;
  }) {
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (!useAbsoluteUrls || !link || isAlreadyAbsolute) return link;

    const domain = isProduction
      ? this.productionDomains[brand]
      : this.preProductionDomains[brand];
    const baseUrl = `${this.linkProtocol}://${domain}`;

    const prefixedLink = {
      de: `${baseUrl}${link.de}`,
      fr: `${baseUrl}${link.fr}`,
      it: `${baseUrl}${link.it}`,
      en: `${baseUrl}${link.en}`,
    };

    return prefixedLink;
  }

  private static determineVisibility({
    visibilitySettings,
    brand,
  }: {
    visibilitySettings: VisibilitySettings;
    brand: Brand;
  }) {
    return visibilitySettings.brand[brand];
  }
}

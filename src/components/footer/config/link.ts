import { Language } from '@smg-automotive/i18n-pkg';

import { Environment } from '../../../types/environment';
import { Brand } from '../../../types/brand';

export type LinkTargets = '_blank';
interface VisibilitySettings {
  brand: Record<Brand, boolean>;
}
type LocalizedLinks = Record<Language, string>;

export interface LinkConfig {
  translationKey: string;
  link?: LocalizedLinks;
  onClick?: () => void;
  target?: LinkTargets;
  visibilitySettings: VisibilitySettings;
}

// !!CMP Link
export class Link {
  translationKey: string;
  link?: LocalizedLinks;
  target?: LinkTargets;
  onClick?: () => void;
  isVisible: boolean;
  linkProtocol: string;
  domains: Record<Brand, Record<Environment, string>>;

  constructor({
    config,
    brand,
    environment,
    useAbsoluteUrls,
  }: {
    config: LinkConfig;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
  }) {
    this.translationKey = config.translationKey;
    this.target = config.target;
    this.onClick = config.onClick;
    this.isVisible = Link.determineVisibility({
      visibilitySettings: config.visibilitySettings,
      brand,
    });
    // FIXME: Do not keep this in the link instance
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
    this.link = this.prefixDomain({
      link: config.link,
      brand,
      environment,
      useAbsoluteUrls,
    });
  }

  private prefixDomain({
    link,
    brand,
    environment,
    useAbsoluteUrls,
  }: {
    link?: LocalizedLinks;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
  }) {
    const isAlreadyAbsolute = link?.de.substring(0, 4) === 'http';
    if (!useAbsoluteUrls || !link || isAlreadyAbsolute) return link;

    const domain = this.domains[brand][environment];
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

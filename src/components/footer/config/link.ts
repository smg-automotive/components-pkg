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

  constructor({
    config,
    brand,
    environment,
    useAbsoluteUrls,
    linkProtocol,
    domains,
  }: {
    config: LinkConfig;
    brand: Brand;
    environment: Environment;
    useAbsoluteUrls: boolean;
    linkProtocol: string;
    domains: Record<Brand, Record<Environment, string>>;
  }) {
    this.translationKey = config.translationKey;
    this.target = config.target;
    this.onClick = config.onClick;
    this.isVisible = Link.determineVisibility({
      visibilitySettings: config.visibilitySettings,
      brand,
    });

    this.link = this.prefixDomain({
      link: config.link,
      brand,
      environment,
      useAbsoluteUrls,
      linkProtocol,
      domains,
    });
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

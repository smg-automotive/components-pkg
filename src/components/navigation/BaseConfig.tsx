// eslint-disable-next-line unicorn/filename-case
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { LinkConfig, LinkInstance } from './link';

export abstract class BaseConfig<T> {
  brand: Brand;
  environment: Environment;
  useAbsoluteUrls: boolean;
  linkProtocol: string;
  domains: Record<Brand, Record<Environment, string>>;

  constructor({
    brand,
    environment = 'production',
    useAbsoluteUrls = false,
  }: {
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
  }) {
    this.brand = brand;
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

  abstract getMappedConfig(): T;

  abstract mapLink(config: LinkConfig): LinkInstance;
}

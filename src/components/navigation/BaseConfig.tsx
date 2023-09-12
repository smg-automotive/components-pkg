import { Environment } from 'src/types/environment';
import { Entitlement } from 'src/types/entitlements';
import { Brand } from 'src/types/brand';

import { LinkConfig, LinkInstance } from './link';

export abstract class BaseConfig<T> {
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
  entitlements?: Entitlement[];

  constructor({
    brand,
    environment = 'production',
    useAbsoluteUrls = false,
    entitlements = [],
  }: {
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
    entitlements?: Entitlement[];
  }) {
    this.brand = brand;
    this.environment = environment;
    this.useAbsoluteUrls = useAbsoluteUrls;
    this.domains = {
      autoscout24: {
        main: {
          production: 'www.autoscout24.ch',
          preprod: 'int.autoscout24.ch',
        },
        internal: {
          professional: {
            production: 'dealer.autoscout24.ch',
            preprod: 'int-dealer.autoscout24.ch',
          },
          private: {
            production: 'my.autoscout24.ch',
            preprod: 'int-my.autoscout24.ch',
          },
        },
      },
      motoscout24: {
        main: {
          production: 'www.motoscout24.ch',
          preprod: 'int.motoscout24.ch',
        },
        internal: {
          professional: {
            production: 'dealer.motoscout24.ch',
            preprod: 'int-dealer.motoscout24.ch',
          },
          private: {
            production: 'my.motoscout24.ch',
            preprod: 'int-my.motoscout24.ch',
          },
        },
      },
    };
    this.linkProtocol = 'https';
    this.entitlements = entitlements;
  }

  abstract getMappedConfig(): T;

  abstract mapLink(config: LinkConfig): LinkInstance;
}

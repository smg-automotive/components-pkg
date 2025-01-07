import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { Domains, LinkConfig, LinkInstance } from './link';
import { Project } from '../../types/project';

export abstract class BaseConfig<T> {
  brand: Brand;
  environment: Environment;
  useAbsoluteUrls: boolean;
  linkProtocol: string;
  domains: Domains;
  entitlements?: string[];
  project: Project;

  constructor({
    brand,
    environment = 'production',
    useAbsoluteUrls = false,
    project,
    entitlements = [],
  }: {
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
    entitlements?: string[];
    project: Project;
  }) {
    this.brand = brand;
    this.environment = environment;
    this.useAbsoluteUrls = useAbsoluteUrls;
    this.project = project;
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

import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import { Domains, LinkConfig, LinkInstance } from './link';

export abstract class BaseConfig<T> {
  brand: Brand;
  environment: Environment;
  useAbsoluteUrls: boolean;
  project?: Project;
  linkProtocol: string;
  domains: Domains;
  entitlements?: string[];

  constructor({
    brand,
    environment = 'production',
    useAbsoluteUrls = false,
    project,
    entitlements,
  }: {
    brand: Brand;
    environment?: Environment;
    useAbsoluteUrls?: boolean;
    project?: Project;
    entitlements?: string[];
  }) {
    this.brand = brand;
    this.environment = environment;
    this.useAbsoluteUrls = useAbsoluteUrls;
    this.project = project;
    this.domains = {
      autoscout24: {
        production: 'www.autoscout24.ch',
        preprod: 'int.autoscout24.ch',
      },
      motoscout24: {
        production: 'www.motoscout24.ch',
        preprod: 'int.motoscout24.ch',
      },
    };
    this.linkProtocol = 'https';
    this.entitlements = entitlements;
  }

  abstract getMappedConfig(): T;

  abstract mapLink(config: LinkConfig): LinkInstance;
}

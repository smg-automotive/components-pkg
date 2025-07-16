import { Brand } from 'src/types/brand';

import { FooterConfig } from '../factory';
import { footerConfig } from '..';

describe('The footer configuration', () => {
  it('returns a mapped instance', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();
    expect(config).toEqual({
      sections: expect.any(Array),
      apps: expect.any(Object),
      socialMedia: expect.any(Object),
      companies: expect.any(Object),
    });
  });

  it('returns six sections', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();
    expect(config.sections.length).toEqual(6);
  });

  it('returns only one visible title per section', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();

    config.sections.forEach((section) => {
      expect(section.title.length).toEqual(1);
    });
  });

  it('returns only one link item per app type', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();

    expect(config.apps.android.length).toEqual(1);
    expect(config.apps.apple.length).toEqual(1);
  });

  it('returns only one link item per social media type', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.AutoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();

    expect(config.socialMedia.facebook.length).toEqual(1);
    expect(config.socialMedia.twitter.length).toEqual(1);
    expect(config.socialMedia.instagram.length).toEqual(1);
    expect(config.socialMedia.youtube.length).toEqual(1);
  });

  it('returns twitter link item only for AutoScout24', () => {
    let footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.AutoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    let config = footerConfigInstance.getMappedConfig();

    expect(config.socialMedia.twitter.length).toEqual(1);

    footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    config = footerConfigInstance.getMappedConfig();

    expect(config.socialMedia.twitter.length).toEqual(0);
  });

  it('returns five company links', () => {
    const footerConfigInstance = new FooterConfig({
      config: footerConfig(),
      brand: Brand.MotoScout24,
      environment: 'production',
      useAbsoluteUrls: true,
    });
    const config = footerConfigInstance.getMappedConfig();

    expect(config.companies.length).toEqual(5);
  });
});

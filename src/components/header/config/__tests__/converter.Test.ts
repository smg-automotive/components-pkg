/* eslint-disable unicorn/filename-case */
import { convertNavigationItem } from '../converter';

describe('conventer', () => {
  it('should convert navigation item', () => {
    const navigationItem = {
      item: {
        translationKey: 'mock.key',
        url: {
          de: '/de/mockPath',
          en: '/de/mockPath',
          fr: '/fr/mockPath',
          it: '/it/mockPath',
        },
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          platform: {
            as24: true,
            ms24: true,
          },
        },
      },
      isVisible: true,
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
      urlPathParams: null,
    };
    const item = convertNavigationItem(navigationItem);

    expect(item).toEqual({
      translationKey: 'mock.key',
      url: {
        de: '/de/mockPath',
        en: '/de/mockPath',
        fr: '/fr/mockPath',
        it: '/it/mockPath',
      },
      isNew: undefined,
      iconRight: undefined,
      color: undefined,
      showUnderMoreLinkBellow: undefined,
      isVisible: true,
    });
  });

  it('should convert navigation item with absolute urls', () => {
    const navigationItem = {
      item: {
        translationKey: 'mock.key',
        url: {
          de: '/de/mockPath',
          en: '/de/mockPath',
          fr: '/fr/mockPath',
          it: '/it/mockPath',
        },
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          platform: {
            as24: true,
            ms24: true,
          },
        },
      },
      isVisible: true,
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: true,
      urlPathParams: null,
    };
    const item = convertNavigationItem(navigationItem);

    expect(item).toEqual({
      translationKey: 'mock.key',
      url: {
        de: 'https://www.autoscout24.com/de/mockPath',
        en: 'https://www.autoscout24.com/de/mockPath',
        fr: 'https://www.autoscout24.com/fr/mockPath',
        it: 'https://www.autoscout24.com/it/mockPath',
      },
      isNew: undefined,
      iconRight: undefined,
      color: undefined,
      showUnderMoreLinkBellow: undefined,
      isVisible: true,
    });
  });

  it('should convert navigation item and add to path urlPathParams', () => {
    const navigationItem = {
      item: {
        translationKey: 'mock.key',
        url: {
          de: '/de/mockPath?userId={userId}',
          en: '/de/mockPath?userId={userId}',
          fr: '/fr/mockPath?userId={userId}',
          it: '/it/mockPath?userId={userId}',
        },
        visibilitySettings: {
          userType: {
            private: true,
            professional: true,
          },
          platform: {
            as24: true,
            ms24: true,
          },
        },
      },
      isVisible: true,
      urlPathParams: { userId: 123 },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: true,
    };
    const item = convertNavigationItem(navigationItem);

    expect(item).toEqual({
      translationKey: 'mock.key',
      url: {
        de: 'https://www.autoscout24.com/de/mockPath?userId=123',
        en: 'https://www.autoscout24.com/de/mockPath?userId=123',
        fr: 'https://www.autoscout24.com/fr/mockPath?userId=123',
        it: 'https://www.autoscout24.com/it/mockPath?userId=123',
      },
      isNew: undefined,
      iconRight: undefined,
      color: undefined,
      showUnderMoreLinkBellow: undefined,
      isVisible: true,
    });
  });
});

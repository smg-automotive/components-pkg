/* eslint-disable unicorn/filename-case */
import * as converter from '../converter';

describe('resolveVisibility', () => {
  jest.spyOn(converter, 'convertNavigationItem');
  it('should resolve visibility to false for private user', () => {
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
            private: false,
            professional: true,
          },
          plattform: {
            as24: true,
            ms24: true,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'private',
      plattform: 'as24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'private',
      plattform: 'as24',
      isVisible: false,
      urlPathParams: null,
    });
  });
  it('should resolve visibility to true for private user', () => {
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
          plattform: {
            as24: true,
            ms24: true,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'private',
      plattform: 'as24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'private',
      plattform: 'as24',
      isVisible: true,
      urlPathParams: null,
    });
  });
  it('should resolve visibility to true for professional user', () => {
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
          plattform: {
            as24: true,
            ms24: true,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'professional',
      plattform: 'as24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'professional',
      plattform: 'as24',
      isVisible: true,
      urlPathParams: null,
    });
  });
  it('should resolve visibility to false for professional user', () => {
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
            professional: false,
          },
          plattform: {
            as24: true,
            ms24: true,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'professional',
      plattform: 'as24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'professional',
      plattform: 'as24',
      isVisible: false,
      urlPathParams: null,
    });
  });
  it('should resolve visibility to false for ms24 plattform', () => {
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
          plattform: {
            as24: true,
            ms24: false,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'professional',
      plattform: 'ms24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'professional',
      plattform: 'ms24',
      isVisible: false,
      urlPathParams: null,
    });
  });
  it('should resolve visibility to true for ms24 plattform', () => {
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
          plattform: {
            as24: true,
            ms24: true,
          },
        },
      },
      domain: 'www.autoscout24.com',
      useAbsoluteUrls: false,
    };

    converter.resolveVisibility({
      ...navigationItem,
      userType: 'professional',
      plattform: 'ms24',
      urlPathParams: null,
    });

    expect(converter.convertNavigationItem).toHaveBeenCalledTimes(1);
    expect(converter.convertNavigationItem).toHaveBeenCalledWith({
      ...navigationItem,
      userType: 'professional',
      plattform: 'ms24',
      isVisible: true,
      urlPathParams: null,
    });
  });
});

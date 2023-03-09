/* eslint-disable unicorn/filename-case */
import { mapDrawerItemsEntries } from '../drawerNodeItems';

describe('drawerNodeItems', () => {
  it('should map drawer node items', () => {
    const items = {
      search: [
        {
          translationKey: 'header.searchMenu.vehicles',
          items: [
            {
              translationKey: 'header.searchMenu.simpleSearch',
              url: {
                de: '/de',
                en: '#',
                fr: '/fr/?vehtyp=10',
                it: '/it',
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
            {
              translationKey: 'header.searchMenu.advancedSearch',
              url: {
                de: '/de/auto/suche',
                en: '/de/auto/suche',
                fr: '/fr/voiture/recherche',
                it: '/it/automobile/ricerca',
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
          ],
        },
      ],
    };

    const nodeItems = mapDrawerItemsEntries({
      userType: 'private',
      plattform: 'as24',
      useAbsoluteUrls: true,
      domain: 'www.autoscout24.com',
      itemsEntires: Object.entries(items),
      urlPathParams: null,
    });
    expect(nodeItems).toEqual([
      [
        'search',
        [
          {
            items: [
              {
                color: undefined,
                iconRight: undefined,
                isNew: undefined,
                isVisible: true,
                showUnderMoreLinkBelow: undefined,
                translationKey: 'header.searchMenu.simpleSearch',
                url: {
                  de: 'https://www.autoscout24.com/de',
                  en: 'https://www.autoscout24.com#',
                  fr: 'https://www.autoscout24.com/fr/?vehtyp=10',
                  it: 'https://www.autoscout24.com/it',
                },
              },
              {
                color: undefined,
                iconRight: undefined,
                isNew: undefined,
                isVisible: true,
                showUnderMoreLinkBelow: undefined,
                translationKey: 'header.searchMenu.advancedSearch',
                url: {
                  de: 'https://www.autoscout24.com/de/auto/suche',
                  en: 'https://www.autoscout24.com/de/auto/suche',
                  fr: 'https://www.autoscout24.com/fr/voiture/recherche',
                  it: 'https://www.autoscout24.com/it/automobile/ricerca',
                },
              },
            ],
            translationKey: 'header.searchMenu.vehicles',
          },
        ],
      ],
    ]);
  });
});

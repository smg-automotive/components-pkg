import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

const sellLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.sell',
    showUnderMoreLinkBelow: 'sm',
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'sell',
      }),
  } satisfies Omit<NavigationLinkConfigProps, 'visibilitySettings'>;
};

export const privateAutoScoutSellLinkConfig = ({
  trackEvent,
  experiments,
}: {
  trackEvent?: (event: CustomEvent) => void;
  experiments?: Record<string, string>;
}) => {
  return {
    ...sellLinkConfig({ trackEvent }),
    link:
      experiments?.c2b === 'on'
        ? {
            de: '/de/sell',
            en: '/en/sell',
            fr: '/fr/sell',
            it: '/it/sell',
          }
        : {
            de: '/de/auto-verkaufen',
            en: '/de/auto-verkaufen',
            fr: '/fr/vendre-voiture',
            it: '/it/vendere-auto',
          },
    projectIdentifier: experiments?.c2b === 'on' ? 'seller-web' : undefined,
    visibilitySettings: {
      userType: {
        private: true,
        professional: false,
      },
      brand: {
        autoscout24: true,
        motoscout24: false,
      },
    },
  } satisfies NavigationLinkConfigProps;
};

export const professionalSellLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    ...sellLinkConfig({ trackEvent }),
    link: {
      de: '/de/member/insertion/type',
      en: '/de/member/insertion/type',
      fr: '/fr/member/insertion/type',
      it: '/it/member/insertion/type',
    },
    visibilitySettings: {
      userType: {
        guest: false,
        private: false,
        professional: true,
      },
      brand: {
        autoscout24: true,
        motoscout24: true,
      },
    },
  } satisfies NavigationLinkConfigProps;
};

export const privateMotoScoutSellLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    ...sellLinkConfig({ trackEvent }),
    link: {
      de: '/de/motorrad-inserieren',
      en: '/de/motorrad-inserieren',
      fr: '/fr/publier-annonce-moto',
      it: '/it/pubblicare-annuncio-moto',
    },
    visibilitySettings: {
      userType: {
        private: true,
        professional: false,
      },
      brand: {
        autoscout24: false,
        motoscout24: true,
      },
    },
  } satisfies NavigationLinkConfigProps;
};

export const insertionLinkConfig: NavigationLinkConfigProps = {
  translationKey: 'header.userMenu.createAd',
  link: {
    de: '/de/member/insertion/type',
    en: '/de/member/insertion/type',
    fr: '/fr/member/insertion/type',
    it: '/it/member/insertion/type',
  },
  visibilitySettings: {
    userType: {
      private: true,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: true,
    },
  },
};

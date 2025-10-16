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
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    ...sellLinkConfig({ trackEvent }),
    projectIdentifier: 'seller-web',
    link: {
      de: '/de/sell',
      en: '/en/sell',
      fr: '/fr/sell',
      it: '/it/sell',
    },
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
    projectIdentifier: 'seller-web',
    link: {
      de: '/de/insertion/identify',
      en: '/en/insertion/identify',
      fr: '/fr/insertion/identify',
      it: '/it/insertion/identify',
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
    projectIdentifier: 'seller-web',
    ...sellLinkConfig({ trackEvent }),
    link: {
      de: '/de/insertion/identify',
      en: '/en/insertion/identify',
      fr: '/fr/insertion/identify',
      it: '/it/insertion/identify',
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
  projectIdentifier: 'seller-web',
  link: {
    de: '/de/insertion/identify',
    en: '/en/insertion/identify',
    fr: '/fr/insertion/identify',
    it: '/it/insertion/identify',
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

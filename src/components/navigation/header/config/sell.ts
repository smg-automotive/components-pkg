import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { LinkConfig } from 'src/components/navigation/link';

const sellLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.sell',
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'sell',
      }),
  } satisfies Omit<LinkConfig, 'visibilitySettings'>;
};

export const privateAutoScoutSellLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    ...sellLinkConfig({ trackEvent }),
    link: {
      de: '/de/auto-verkaufen',
      en: '/de/auto-verkaufen',
      fr: '/fr/vendre-voiture',
      it: '/it/vendere-auto',
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
  } satisfies LinkConfig;
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
  } satisfies LinkConfig;
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
  } satisfies LinkConfig;
};

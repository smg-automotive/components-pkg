import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { LinkConfig } from 'src/components/navigation/link';

export const autoScoutAssureLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.assure',
    link: {
      de: '/de/autoversicherung',
      en: '/de/autoversicherung',
      fr: '/fr/assurance-auto',
      it: '/it/assicurazione-auto',
    },
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      brand: {
        autoscout24: true,
        motoscout24: false,
      },
    },
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'insurance',
      }),
  } satisfies LinkConfig;
};

export const motoScoutAssureLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.assure',
    link: {
      de: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      en: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      fr: 'https://www.financescout24.ch/fr/assurance-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      it: 'https://www.financescout24.ch/it/assicurazione-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
    },
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      brand: {
        autoscout24: false,
        motoscout24: true,
      },
    },
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'insurance',
      }),
  } satisfies LinkConfig;
};

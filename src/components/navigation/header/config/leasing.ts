import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const leasingLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.leasing',
    link: {
      de: 'https://content.autoscout24.ch/de/leasing-test/',
      en: 'https://content.autoscout24.ch/de/leasing-test/',
      fr: 'https://content.autoscout24.ch/fr/test-de-leasing/',
      it: 'https://content.autoscout24.ch/it/test-di-leasing/',
    },
    showUnderMoreLinkBelow: 'lg',
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventLabel: 'header',
        eventAction: 'open_leasing',
      }),
  } satisfies NavigationLinkConfigProps;
};

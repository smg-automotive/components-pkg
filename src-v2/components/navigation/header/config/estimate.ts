import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const estimateLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.estimate',
    link: {
      de: 'https://my.autoscout24.ch/de/fahrzeugbewertung',
      en: 'https://my.autoscout24.ch/de/fahrzeugbewertung',
      fr: 'https://my.autoscout24.ch/fr/evaluation-vehicules',
      it: 'https://my.autoscout24.ch/it/valuazione-vehicoli',
    },
    showUnderMoreLinkBelow: 'sm',
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'estimate',
      }),
  } satisfies NavigationLinkConfigProps;
};

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
      de: '/de/price-estimate',
      en: '/de/price-estimate',
      fr: '/fr/price-estimate',
      it: '/it/price-estimate',
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

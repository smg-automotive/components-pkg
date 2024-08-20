import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const electromobilityLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.electromobility',
    link: {
      de: 'https://guide.autoscout24.ch/de/elektromobilitaet/',
      en: 'https://guide.autoscout24.ch/de/elektromobilitaet/',
      fr: 'https://guide.autoscout24.ch/fr/mobilite-electrique/',
      it: 'https://guide.autoscout24.ch/it/mobilita-elettrica/',
    },
    showUnderMoreLinkBelow: 'lg',
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
        eventAction: 'electromobility',
      }),
  } satisfies NavigationLinkConfigProps;
};

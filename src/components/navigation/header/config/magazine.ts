import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const magazineLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.magazine',
    link: {
      de: 'https://guide.motoscout24.ch/de/',
      en: 'https://guide.motoscout24.ch/de/',
      fr: 'https://guide.motoscout24.ch/fr/',
      it: 'https://guide.motoscout24.ch/it/',
    },
    showUnderMoreLinkBelow: 'lg',
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
        eventAction: 'magazine',
      }),
  } satisfies NavigationLinkConfigProps;
};

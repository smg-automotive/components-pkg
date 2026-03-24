import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { NavigationLinkConfigProps } from './headerLinks';

export const c2bLinkConfig = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}) => {
  return {
    translationKey: 'header.userMenu.c2b',
    link: {
      de: 'https://b2b.autoscout24.ch/direct/',
      en: 'https://b2b.autoscout24.ch/direct/',
      fr: 'https://b2b.autoscout24.ch/fr/direct/',
      it: 'https://b2b.autoscout24.ch/it/direct/',
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'open_as24_direct_b2b',
      }),
  } satisfies NavigationLinkConfigProps;
};

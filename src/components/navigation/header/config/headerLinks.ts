import { CustomEvent, navigationEventCategory } from 'src/types/tracking';

import { EntitlementConfig } from 'src/components/navigation/link';

import { NavigationLinkProps } from '../links/NavigationLink';
import {
  assure,
  electromobility,
  estimate,
  magazine,
  sell,
  ShowUnderMoreBreakpoint,
} from './showUnderMoreConstants';
import {
  privateAutoScoutSellLinkConfig,
  privateMotoScoutSellLinkConfig,
  professionalSellLinkConfig,
} from './sell';
import { estimateLinkConfig } from './estimate';

export type NavigationLinkConfigProps = Omit<
  NavigationLinkProps,
  'isVisible'
> & {
  showUnderMoreLinkBelow?: ShowUnderMoreBreakpoint;
  color?: string;
  visibilitySettings: {
    userType: {
      private: boolean;
      professional: boolean;
      guest?: boolean;
    };
    brand: {
      autoscout24: boolean;
      motoscout24: boolean;
    };
  };
  isInternal?: boolean;
  forceMotoscoutLink?: boolean;
  forceAutoscoutLink?: boolean;
  entitlementConfig?: EntitlementConfig;
  tracking?: CustomEvent;
};

export const headerLinks = ({
  trackEvent,
}: {
  trackEvent?: (event: CustomEvent) => void;
}): NavigationLinkConfigProps[] => [
  {
    ...privateAutoScoutSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...privateMotoScoutSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...professionalSellLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: sell,
  },
  {
    ...estimateLinkConfig({ trackEvent }),
    showUnderMoreLinkBelow: estimate,
  },
  {
    translationKey: 'header.assure',
    link: {
      de: '/de/autoversicherung',
      en: '/de/autoversicherung',
      fr: '/fr/assurance-auto',
      it: '/it/assicurazione-auto',
    },
    showUnderMoreLinkBelow: assure,
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
  },
  {
    translationKey: 'header.assure',
    link: {
      de: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      en: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      fr: 'https://www.financescout24.ch/fr/assurance-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
      it: 'https://www.financescout24.ch/it/assicurazione-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=main_navigation_moto_',
    },
    showUnderMoreLinkBelow: assure,
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
  },
  {
    translationKey: 'header.electromobility',
    link: {
      de: 'https://guide.autoscout24.ch/de/elektromobilitaet/',
      en: 'https://guide.autoscout24.ch/de/elektromobilitaet/',
      fr: 'https://guide.autoscout24.ch/fr/mobilite-electrique/',
      it: 'https://guide.autoscout24.ch/it/mobilita-elettrica/',
    },
    showUnderMoreLinkBelow: electromobility,
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
  },
  {
    translationKey: 'header.magazine',
    link: {
      de: 'https://guide.motoscout24.ch/de/',
      en: 'https://guide.motoscout24.ch/de/',
      fr: 'https://guide.motoscout24.ch/fr/',
      it: 'https://guide.motoscout24.ch/it/',
    },
    showUnderMoreLinkBelow: magazine,
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
  },
];

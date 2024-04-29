import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { BreakpointName } from 'src/themes/shared/breakpoints';

import { EntitlementConfig } from 'src/components/navigation/link';

import { NavigationLinkProps } from '../links/NavigationLink';

export type NavigationLinkConfigProps = Omit<
  NavigationLinkProps,
  'isVisible'
> & {
  showUnderMoreLinkBelow?: BreakpointName;
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
    translationKey: 'header.sell',
    link: {
      de: '/de/auto-verkaufen',
      en: '/de/auto-verkaufen',
      fr: '/fr/vendre-voiture',
      it: '/it/vendere-auto',
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
        eventAction: 'sell',
      }),
  },
  {
    translationKey: 'header.sell',
    link: {
      de: '/de/motorrad-inserieren',
      en: '/de/motorrad-inserieren',
      fr: '/fr/publier-annonce-moto',
      it: '/it/pubblicare-annuncio-moto',
    },
    showUnderMoreLinkBelow: 'sm',
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'sell',
      }),
  },
  {
    translationKey: 'header.sell',
    link: {
      de: '/de/member/insertion/type',
      en: '/de/member/insertion/type',
      fr: '/fr/member/insertion/type',
      it: '/it/member/insertion/type',
    },
    showUnderMoreLinkBelow: 'sm',
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
    onClick: () =>
      trackEvent?.({
        eventCategory: navigationEventCategory,
        eventAction: 'sell',
      }),
  },
  {
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
  },
  {
    translationKey: 'header.assure',
    link: {
      de: '/de/autoversicherung',
      en: '/de/autoversicherung',
      fr: '/fr/assurance-auto',
      it: '/it/assicurazione-auto',
    },
    showUnderMoreLinkBelow: 'md',
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
    showUnderMoreLinkBelow: 'md',
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
  },
  {
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
  },
];

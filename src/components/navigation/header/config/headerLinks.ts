import { BreakpointName } from 'src/themes/shared/breakpoints';

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
    };
    brand: {
      as24: boolean;
      ms24: boolean;
    };
  };
};

export const headerLinks: NavigationLinkConfigProps[] = [
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
        professional: true,
      },
      brand: {
        as24: true,
        ms24: false,
      },
    },
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
        professional: true,
      },
      brand: {
        as24: false,
        ms24: true,
      },
    },
  },
  {
    translationKey: 'header.estimate',
    link: {
      de: '/de/fahrzeugbewertung',
      en: '/de/fahrzeugbewertung',
      fr: '/fr/evaluation-vehicules',
      it: '/it/valuazione-vehicoli',
    },
    showUnderMoreLinkBelow: 'sm',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      brand: {
        as24: true,
        ms24: false,
      },
    },
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
        as24: true,
        ms24: false,
      },
    },
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
        as24: false,
        ms24: true,
      },
    },
  },
  {
    translationKey: 'header.magazine',
    link: {
      de: 'https://guide.autoscout24.ch/de/',
      en: 'https://guide.autoscout24.ch/de/',
      fr: 'https://guide.autoscout24.ch/fr/',
      it: 'https://guide.autoscout24.ch/it/',
    },
    showUnderMoreLinkBelow: 'lg',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      brand: {
        as24: true,
        ms24: false,
      },
    },
  },
  {
    translationKey: 'header.magazine',
    link: {
      de: '/de/c/h/information',
      en: '/en/c/h/information',
      fr: '/fr/c/h/information',
      it: '/it/c/h/information',
    },
    showUnderMoreLinkBelow: 'lg',
    visibilitySettings: {
      userType: {
        private: true,
        professional: true,
      },
      brand: {
        as24: false,
        ms24: true,
      },
    },
  },
];

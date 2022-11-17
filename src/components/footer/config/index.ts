import { LinkConfig } from './link';

declare global {
  interface Window {
    OneTrust: {
      ToggleInfoDisplay: () => void;
    };
  }
}

interface LinkSectionConfig {
  title: LinkConfig[];
  items: LinkConfig[];
}

export interface FooterConfigInterface {
  sections: LinkSectionConfig[];
  apps: {
    android: LinkConfig[];
    apple: LinkConfig[];
  };
  socialMedia: {
    facebook: LinkConfig[];
    instagram: LinkConfig[];
    twitter: LinkConfig[];
    youtube: LinkConfig[];
  };
  companies: LinkConfig[];
}

export const footerConfig: FooterConfigInterface = {
  sections: [
    {
      title: [
        {
          translationKey: 'footer.as24.sections.brand.title',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
        },
        {
          translationKey: 'footer.ms24.sections.brand.title',
          visibilitySettings: {
            brand: { as24: false, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.brand.advancedSearch',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto/suche',
            en: '/de/auto/suche',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.dealerSearch',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-haendler-garage/suche',
            en: '/de/auto-haendler-garage/suche',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.makes',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-marken',
            en: '/de/auto-marken',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.models',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-modelle',
            en: '/de/auto-modelle',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.brand.insurance',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            en: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            fr: 'TODO',
            it: 'TODO',
          },
          target: '_blank',
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.list.title',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.list.vehicles',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/auto-verkaufen',
            en: '/de/auto-verkaufen',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.list.productsAndPrices',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
          link: {
            de: '/de/produkte-und-preise',
            en: '/de/produkte-und-preise',
            fr: 'TODO',
            it: 'TODO',
          },
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.aboutUs.title',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.aboutUs.contact',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/contact/',
            en: '/de/contact/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.aboutUs.newsletter',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/newsletter/?ac=rg',
            en: '/de/newsletter/?ac=rg',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.aboutUs.factsAndFigures',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://swissmarketplace.group/de/automotive/',
            en: 'https://swissmarketplace.group/automotive/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.aboutUs.jobs',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://swissmarketplace.group/de/karriere/',
            en: 'https://swissmarketplace.group/career/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.advertisement.title',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.advertisement.smg',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://swissmarketplace.group/de/werbung/',
            en: 'https://swissmarketplace.group/advertising/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.media.title',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.media.contact',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://medien-de.autoscout24.ch/',
            en: 'https://medien-de.autoscout24.ch/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.legal.title',
          visibilitySettings: {
            brand: { as24: true, ms24: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.legal.securityHint',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/c/d/information/sicherheitshinweise-fuer-kaeufer-und-verkaeufer-so-tappen-sie-nicht-in-die-betrugsfalle?a=13444',
            en: '/de/c/d/information/sicherheitshinweise-fuer-kaeufer-und-verkaeufer-so-tappen-sie-nicht-in-die-betrugsfalle?a=13444',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.legal.rules',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/content/insertionsregeln',
            en: '/de/content/insertionsregeln',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.legal.agb',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/content/agb',
            en: '/de/content/agb',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.legal.dataProtection',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: 'https://swissmarketplace.group/de/datenschutzerklaerung/',
            en: 'https://swissmarketplace.group/privacy/',
            fr: 'TODO',
            it: 'TODO',
          },
        },
        {
          translationKey: 'footer.sections.legal.cookieSettings',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          onClick: () => {
            window.OneTrust?.ToggleInfoDisplay();
          },
        },
        {
          translationKey: 'footer.sections.legal.imprint',
          visibilitySettings: {
            brand: { as24: true, ms24: false },
          },
          link: {
            de: '/de/content/impressum',
            en: '/de/content/impressum',
            fr: 'TODO',
            it: 'TODO',
          },
        },
      ],
    },
  ],
  apps: {
    android: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
          en: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
    apple: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          en: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
  },
  socialMedia: {
    facebook: [
      {
        translationKey: 't',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://www.facebook.com/autoscout24.ch',
          en: 'https://www.facebook.com/autoscout24.ch',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
    instagram: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://www.instagram.com/autoscout24ch/',
          en: 'https://www.instagram.com/autoscout24ch/',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
    twitter: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://twitter.com/autoscout24_ch?lang=de',
          en: 'https://twitter.com/autoscout24_ch?lang=en/',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
    youtube: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { as24: true, ms24: false },
        },
        link: {
          de: 'https://www.youtube.com/user/autoscout24schweiz',
          en: 'https://www.youtube.com/user/autoscout24schweiz',
          fr: 'TODO',
          it: 'TODO',
        },
        target: '_blank',
      },
    ],
  },
  companies: [
    {
      translationKey: 'footer.companies.smg',
      visibilitySettings: {
        brand: { as24: true, ms24: false },
      },
      link: {
        de: 'https://swissmarketplace.group/de/',
        en: 'https://swissmarketplace.group',
        fr: 'TODO',
        it: 'TODO',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.financeScout24',
      visibilitySettings: {
        brand: { as24: true, ms24: false },
      },
      link: {
        de: 'https://www.financescout24.ch/de',
        en: 'https://www.financescout24.ch/de',
        fr: 'TODO',
        it: 'TODO',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.immoScout24',
      visibilitySettings: {
        brand: { as24: true, ms24: false },
      },
      link: {
        de: 'https://www.immoscout24.ch/de',
        en: 'https://www.immoscout24.ch/en',
        fr: 'TODO',
        it: 'TODO',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.motoScout24',
      visibilitySettings: {
        brand: { as24: true, ms24: false },
      },
      link: {
        de: 'https://www.motoscout24.ch/de/',
        en: 'https://www.motoscout24.ch/de/',
        fr: 'TODO',
        it: 'TODO',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.anibis',
      visibilitySettings: {
        brand: { as24: true, ms24: false },
      },
      link: {
        de: 'https://www.anibis.ch/de',
        en: 'https://www.anibis.ch/de',
        fr: 'TODO',
        it: 'TODO',
      },
      target: '_blank',
    },
  ],
};

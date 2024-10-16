import { Brand } from 'src/types/brand';
import { LinkConfig } from 'src/components/navigation/link';

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
    linkedin: LinkConfig[];
    youtube: LinkConfig[];
  };
  companies: LinkConfig[];
}

export const footerConfig = ({
  experiments = {},
}: {
  experiments?: Record<string, string>;
} = {}): FooterConfigInterface => ({
  sections: [
    {
      title: [
        {
          translationKey: 'footer.autoscout24.sections.brand.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
        },
        {
          translationKey: 'footer.motoscout24.sections.brand.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.brand.advancedSearch',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
          link: {
            de: '/de/auto/suche',
            en: '/de/auto/suche',
            fr: '/fr/voiture/recherche',
            it: '/it/automobile/ricerca',
          },
        },
        {
          translationKey: 'footer.sections.brand.advancedSearch',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/motorrad/suche',
            en: '/de/motorrad/suche',
            fr: '/fr/moto/recherche',
            it: '/it/moto/ricerca',
          },
        },
        {
          translationKey: 'footer.sections.brand.dealerSearch',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
          link: {
            de: '/de/sellers',
            en: '/de/sellers',
            fr: '/fr/sellers',
            it: '/it/sellers',
          },
        },
        {
          translationKey: 'footer.sections.brand.dealerSearch',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/sellers',
            en: '/de/sellers',
            fr: '/fr/sellers',
            it: '/it/sellers',
          },
        },
        {
          translationKey: 'footer.sections.brand.makes',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
          link: {
            de: '/de/auto-marken',
            en: '/de/auto-marken',
            fr: '/fr/marques-de-vehicules',
            it: '/it/marche-automobili',
          },
        },
        {
          translationKey: 'footer.sections.brand.makes',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/motorrad-marken',
            en: '/de/motorrad-marken',
            fr: '/fr/marques-motos',
            it: '/it/marche-moto',
          },
        },
        {
          translationKey: 'footer.sections.brand.models',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
          link: {
            de: '/de/auto-modelle',
            en: '/de/auto-modelle',
            fr: '/fr/modeles-voitures',
            it: '/it/modelli-automobili',
          },
        },
        {
          translationKey: 'footer.autoscout24.sections.brand.insurance',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
          },
          link: {
            de: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            en: 'https://www.financescout24.ch/de/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            fr: 'https://www.financescout24.ch/fr/trouver-assurance-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
            it: 'https://www.financescout24.ch/it/trova-assicurazione-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_footer_car_',
          },
          target: '_blank',
        },
        {
          translationKey: 'footer.motoscout24.sections.brand.insurance',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=link_footer_moto_',
            en: 'https://www.financescout24.ch/de/motorradversicherung?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=link_footer_moto_',
            fr: 'https://www.financescout24.ch/fr/assurance-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=link_footer_moto_',
            it: 'https://www.financescout24.ch/it/assicurazione-moto?utm_source=motoscout24.ch&utm_medium=web&utm_campaign=link_footer_moto_',
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
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        ...(experiments?.c2b === 'on'
          ? [
              {
                translationKey: 'footer.sections.list.vehicles',
                visibilitySettings: {
                  brand: {
                    [Brand.AutoScout24]: true,
                    [Brand.MotoScout24]: false,
                  },
                },
                link: {
                  de: '/de/sell',
                  en: '/en/sell',
                  fr: '/fr/sell',
                  it: '/it/sell',
                },
              },
              {
                translationKey: 'footer.sections.list.direct',
                visibilitySettings: {
                  brand: {
                    [Brand.AutoScout24]: true,
                    [Brand.MotoScout24]: false,
                  },
                },
                link: {
                  de: '/de/direct',
                  en: '/en/direct',
                  fr: '/fr/direct',
                  it: '/it/direct',
                },
              },
            ]
          : [
              {
                translationKey: 'footer.sections.list.vehicles',
                visibilitySettings: {
                  brand: {
                    [Brand.AutoScout24]: true,
                    [Brand.MotoScout24]: false,
                  },
                },
                link: {
                  de: '/de/auto-verkaufen',
                  en: '/de/auto-verkaufen',
                  fr: '/fr/vendre-voiture',
                  it: '/it/vendere-auto',
                },
              },
            ]),
        {
          translationKey: 'footer.sections.list.vehicles',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/motorrad-inserieren',
            en: '/de/motorrad-inserieren',
            fr: '/fr/member/insertion/type',
            it: '/it/member/insertion/type',
          },
        },
        {
          translationKey: 'footer.sections.list.productsAndPrices',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/produkte-und-preise',
            en: '/de/produkte-und-preise',
            fr: '/fr/produits-et-prix',
            it: '/it/prodotti-e-prezzi',
          },
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.aboutUs.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.aboutUs.contact',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/contact/',
            en: '/de/contact/',
            fr: '/fr/contact/',
            it: '/it/contact/',
          },
        },
        {
          translationKey: 'footer.sections.aboutUs.newsletter',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: false },
          },
          link: {
            de: '/de/newsletter/?ac=rg',
            en: '/de/newsletter/?ac=rg',
            fr: '/fr/newsletter/?ac=rg',
            it: '/it/newsletter/?ac=rg',
          },
        },
        {
          translationKey: 'footer.sections.aboutUs.factsAndFigures',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://swissmarketplace.group/de/automotive/',
            en: 'https://swissmarketplace.group/automotive/',
            fr: 'https://swissmarketplace.group/fr/automotive/',
            it: 'https://swissmarketplace.group/it/automotive/',
          },
          target: '_blank',
        },
        {
          translationKey: 'footer.sections.aboutUs.jobs',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://swissmarketplace.group/de/karriere/',
            en: 'https://swissmarketplace.group/career/',
            fr: 'https://swissmarketplace.group/fr/carrieres/',
            it: 'https://swissmarketplace.group/career/',
          },
          target: '_blank',
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.advertisement.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.advertisement.smg',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://swissmarketplace.group/de/werbung/',
            en: 'https://swissmarketplace.group/advertising/',
            fr: 'https://swissmarketplace.group/fr/publicite/',
            it: 'https://swissmarketplace.group/advertising/',
          },
          target: '_blank',
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.media.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.media.contact',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://swissmarketplace.group/de/media/',
            en: 'https://swissmarketplace.group/media/',
            fr: 'https://swissmarketplace.group/fr/actualites/',
            it: 'https://swissmarketplace.group/media/',
          },
          target: '_blank',
        },
      ],
    },
    {
      title: [
        {
          translationKey: 'footer.sections.legal.title',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
        },
      ],
      items: [
        {
          translationKey: 'footer.sections.legal.securityHint',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/c/d/information/sicherheitshinweise-fuer-kaeufer-und-verkaeufer-so-tappen-sie-nicht-in-die-betrugsfalle?a=13444',
            en: '/de/c/d/information/sicherheitshinweise-fuer-kaeufer-und-verkaeufer-so-tappen-sie-nicht-in-die-betrugsfalle?a=13444',
            fr: '/fr/c/d/information/conseils-de-securite-d-autoscout24?a=28058',
            it: '/it/c/d/informazione/avvertenze-sulla-sicurezza-di-autoscout24?a=28059',
          },
        },
        {
          translationKey: 'footer.sections.legal.rules',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/content/insertionsregeln',
            en: '/de/content/insertionsregeln',
            fr: '/fr/content/regles-d-insertion',
            it: '/it/content/regole-d-inserzione',
          },
        },
        {
          translationKey: 'footer.sections.legal.agb',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/content/agb',
            en: '/de/content/agb',
            fr: '/fr/content/conditions-generales',
            it: '/it/content/condizioni-generali',
          },
        },
        {
          translationKey: 'footer.sections.legal.dataProtection',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: 'https://guide.autoscout24.ch/de/datenschutzerklaerung/',
            en: 'https://guide.autoscout24.ch/de/datenschutzerklaerung/',
            fr: 'https://guide.autoscout24.ch/fr/declaration-de-protection-des-donnees/',
            it: 'https://guide.autoscout24.ch/it/dichiarazione-sulla-protezione-dei-dati/',
          },
          target: '_blank',
        },
        {
          translationKey: 'footer.sections.legal.cookieSettings',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          onClick: () => {
            // eslint-disable-next-line sonarjs/new-cap
            window.OneTrust?.ToggleInfoDisplay();
          },
        },
        {
          translationKey: 'footer.sections.legal.imprint',
          visibilitySettings: {
            brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
          },
          link: {
            de: '/de/content/impressum',
            en: '/de/content/impressum',
            fr: '/fr/content/mentionslegales',
            it: '/it/content/colofone',
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
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
          en: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
          fr: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
          it: 'https://5kvw.app.link/AS24_Web_Footer_GP?%243p=a_custom_358666',
        },
        target: '_blank',
      },
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://9s76.app.link/MS24_Web_Footer_GP?%243p=a_custom_358667',
          en: 'https://9s76.app.link/MS24_Web_Footer_GP?%243p=a_custom_358667',
          fr: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          it: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
        },
        target: '_blank',
      },
    ],
    apple: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          en: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          fr: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
          it: 'https://5kvw.app.link/AS24_Web_Footer_iOS?%243p=a_custom_358666',
        },
        target: '_blank',
      },
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://9s76.app.link/MS24_Web_Footer_iOS?%243p=a_custom_358667',
          en: 'https://9s76.app.link/MS24_Web_Footer_iOS?%243p=a_custom_358667',
          fr: 'https://9s76.app.link/MS24_Web_Footer_iOS?%243p=a_custom_358667',
          it: 'https://9s76.app.link/MS24_Web_Footer_iOS?%243p=a_custom_358667',
        },
        target: '_blank',
      },
    ],
  },
  socialMedia: {
    facebook: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://www.facebook.com/autoscout24.ch',
          en: 'https://www.facebook.com/autoscout24.ch',
          fr: 'https://www.facebook.com/autoscout24.ch',
          it: 'https://www.facebook.com/autoscout24.ch',
        },
        target: '_blank',
      },
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://www.facebook.com/motoscout24.ch',
          en: 'https://www.facebook.com/motoscout24.ch',
          fr: 'https://www.facebook.com/motoscout24.ch',
          it: 'https://www.facebook.com/motoscout24.ch',
        },
        target: '_blank',
      },
    ],
    instagram: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://www.instagram.com/autoscout24ch/',
          en: 'https://www.instagram.com/autoscout24ch/',
          fr: 'https://www.instagram.com/autoscout24ch/',
          it: 'https://www.instagram.com/autoscout24ch/',
        },
        target: '_blank',
      },
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://www.instagram.com/motoscout24ch/',
          en: 'https://www.instagram.com/motoscout24ch/',
          fr: 'https://www.instagram.com/motoscout24ch/',
          it: 'https://www.instagram.com/motoscout24ch/',
        },
        target: '_blank',
      },
    ],
    twitter: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://twitter.com/autoscout24_ch?lang=de',
          en: 'https://twitter.com/autoscout24_ch?lang=en',
          fr: 'https://twitter.com/autoscout24_ch?lang=fr',
          it: 'https://twitter.com/autoscout24_ch?lang=it',
        },
        target: '_blank',
      },
    ],
    linkedin: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://www.linkedin.com/company/autoscout24.ch/',
          en: 'https://www.linkedin.com/company/autoscout24.ch/',
          fr: 'https://www.linkedin.com/company/autoscout24.ch/',
          it: 'https://www.linkedin.com/company/autoscout24.ch/',
        },
        target: '_blank',
      },
    ],
    youtube: [
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
        },
        link: {
          de: 'https://www.youtube.com/user/autoscout24schweiz',
          en: 'https://www.youtube.com/user/autoscout24schweiz',
          fr: 'https://www.youtube.com/user/autoscout24schweiz',
          it: 'https://www.youtube.com/user/autoscout24schweiz',
        },
        target: '_blank',
      },
      {
        translationKey: '',
        visibilitySettings: {
          brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
        },
        link: {
          de: 'https://www.youtube.com/user/motoscout24schweiz',
          en: 'https://www.youtube.com/user/motoscout24schweiz',
          fr: 'https://www.youtube.com/user/motoscout24schweiz',
          it: 'https://www.youtube.com/user/motoscout24schweiz',
        },
        target: '_blank',
      },
    ],
  },
  companies: [
    {
      translationKey: 'footer.companies.smg',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
      },
      link: {
        de: 'https://swissmarketplace.group/de/',
        en: 'https://swissmarketplace.group',
        fr: 'https://swissmarketplace.group/fr/',
        it: 'https://swissmarketplace.group',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.autoScout24',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: false, [Brand.MotoScout24]: true },
      },
      link: {
        de: 'https://www.autoscout24.ch/de/',
        en: 'https://www.autoscout24.ch/de/',
        fr: 'https://www.autoscout24.ch/fr/',
        it: 'https://www.autoscout24.ch/it/',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.financeScout24',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
      },
      link: {
        de: 'https://www.financescout24.ch/de',
        en: 'https://www.financescout24.ch/de',
        fr: 'https://www.financescout24.ch/fr',
        it: 'https://www.financescout24.ch/it',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.immoScout24',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
      },
      link: {
        de: 'https://www.immoscout24.ch/de',
        en: 'https://www.immoscout24.ch/en',
        fr: 'https://www.immoscout24.ch/fr',
        it: 'https://www.immoscout24.ch/it',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.motoScout24',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: false },
      },
      link: {
        de: 'https://www.motoscout24.ch/de/',
        en: 'https://www.motoscout24.ch/de/',
        fr: 'https://www.motoscout24.ch/fr/',
        it: 'https://www.motoscout24.ch/it/',
      },
      target: '_blank',
    },
    {
      translationKey: 'footer.companies.anibis',
      visibilitySettings: {
        brand: { [Brand.AutoScout24]: true, [Brand.MotoScout24]: true },
      },
      link: {
        de: 'https://www.anibis.ch/de',
        en: 'https://www.anibis.ch/de',
        fr: 'https://www.anibis.ch/fr',
        it: 'https://www.anibis.ch/it',
      },
      target: '_blank',
    },
  ],
});

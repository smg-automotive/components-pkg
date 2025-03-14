import { NavigationLinkConfigProps } from './headerLinks';

export const autoScoutInsuranceComparisonLinkConfig: NavigationLinkConfigProps =
  {
    translationKey: 'header.searchMenu.insuranceComparison',
    link: {
      de: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
      en: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
      fr: 'https://www.financescout24.ch/fr/lp/trouver-assurance-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
      it: 'https://www.financescout24.ch/it/lp/trova-assicurazione-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
    },
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
  };

export const motoScoutInsuranceComparisonLinkConfig: NavigationLinkConfigProps =
  {
    translationKey: 'header.searchMenu.insuranceComparison',
    link: {
      de: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
      en: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
      fr: 'https://www.financescout24.ch/fr/lp/trouver-assurance-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
      it: 'https://www.financescout24.ch/it/lp/trova-assicurazione-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
    },
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
  };

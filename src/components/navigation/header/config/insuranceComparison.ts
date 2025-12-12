import { NavigationLinkConfigProps } from './headerLinks';

export const getAutoScoutInsuranceComparisonLinkConfig = (
  userVisibilitySettings: NavigationLinkConfigProps['visibilitySettings']['userType'],
): NavigationLinkConfigProps => ({
  translationKey: 'header.searchMenu.insuranceComparison',
  link: {
    de: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
    en: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
    fr: 'https://www.financescout24.ch/fr/lp/trouver-assurance-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
    it: 'https://www.financescout24.ch/it/lp/trova-assicurazione-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_car_',
  },
  visibilitySettings: {
    userType: userVisibilitySettings,
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
});

export const getMotoScoutInsuranceComparisonLinkConfig = (
  userVisibilitySettings: NavigationLinkConfigProps['visibilitySettings']['userType'],
): NavigationLinkConfigProps => ({
  translationKey: 'header.searchMenu.insuranceComparison',
  link: {
    de: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
    en: 'https://www.financescout24.ch/de/lp/autoversicherung-finden?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
    fr: 'https://www.financescout24.ch/fr/lp/trouver-assurance-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
    it: 'https://www.financescout24.ch/it/lp/trova-assicurazione-auto?utm_source=autoscout24.ch&utm_medium=web&utm_campaign=subnavigation_moto_',
  },
  visibilitySettings: {
    userType: userVisibilitySettings,
    brand: {
      autoscout24: false,
      motoscout24: true,
    },
  },
});

export const getProfessionalAutoScoutInsuranceComparisonLinkConfig = ({
  sellerId,
}: {
  sellerId?: string;
}) => ({
  translationKey: 'header.userMenu.insuranceComparison',
  link: {
    de: `https://partnerhub.financescout24.ch/de/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation_insurance`,
    en: `https://partnerhub.financescout24.ch/de/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation_insurance`,
    fr: `https://partnerhub.financescout24.ch/fr/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation_insurance`,
    it: `https://partnerhub.financescout24.ch/it/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation_insurance`,
  },
  visibilitySettings: {
    userType: {
      private: false,
      professional: true,
    },
    brand: {
      autoscout24: true,
      motoscout24: false,
    },
  },
});

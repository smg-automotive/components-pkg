export const getPartnerHubLinkConfig = ({
  sellerId,
}: {
  sellerId?: string;
}) => ({
  translationKey: 'header.userMenu.partnerHub',
  link: {
    de: `https://partnerhub.financescout24.ch/de/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation`,
    en: `https://partnerhub.financescout24.ch/de/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation`,
    fr: `https://partnerhub.financescout24.ch/fr/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation`,
    it: `https://partnerhub.financescout24.ch/it/landing?dealerId=${sellerId}&utm_source=autoscout24.ch&utm_medium=web&utm_campaign=link_as24_cardealer_portal_headernavigation`,
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

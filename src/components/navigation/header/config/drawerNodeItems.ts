import { NavigationLinkProps } from '../links/NavigationLink';
import { HeaderNavigationLink } from './headerNavigationLink';
import { NavigationLinkConfigProps } from './headerLinks';

export interface NavigationLinkNode {
  translationKey?: string;
  items: NavigationLinkProps[];
}

export enum DrawerNode {
  Search = 'search',
  User = 'user',
  More = 'more',
}

export type NavigationLinkConfigNode = Omit<NavigationLinkNode, 'items'> & {
  items: NavigationLinkConfigProps[];
};

export type DrawerNodeItems = { [key in DrawerNode]: NavigationLinkNode[] };

export type DrawerNodeItemsConfig = {
  [key in DrawerNode]: NavigationLinkConfigNode[];
};

export type DrawerNodeLinks = {
  [key in DrawerNode]: HeaderNavigationLink[];
};

export const drawerNodeItems = ({
  onLogout,
}: {
  onLogout: () => void;
}): DrawerNodeItemsConfig => ({
  search: [
    {
      translationKey: 'header.searchMenu.vehicles',
      items: [
        {
          translationKey: 'header.searchMenu.simpleSearch',
          link: {
            de: '/de',
            en: '/de',
            fr: '/fr',
            it: '/it',
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
        },
        {
          translationKey: 'header.searchMenu.advancedSearch',
          link: {
            de: '/de/auto/suche',
            en: '/de/auto/suche',
            fr: '/fr/voiture/recherche',
            it: '/it/automobile/ricerca',
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
        },
        {
          translationKey: 'header.searchMenu.advancedSearch',
          link: {
            de: '/de/motorrad/suche',
            en: '/de/motorrad/suche',
            fr: '/fr/moto/recherche',
            it: '/it/moto/ricerca',
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
        },
      ],
    },
    {
      translationKey: 'header.searchMenu.dealer',
      items: [
        {
          translationKey: 'header.searchMenu.searchMerchant',
          link: {
            de: '/de/auto-haendler-garage/suche',
            en: '/de/auto-haendler-garage/suche',
            fr: '/fr/voiture-concessionaires-garages/recherche',
            it: '/it/auto-concessionari-garage/ricerca',
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
        },
        {
          translationKey: 'header.searchMenu.searchMerchant',
          link: {
            de: '/de/moto-haendler-garage/suche',
            en: '/de/moto-haendler-garage/suche',
            fr: '/fr/moto-concessionaires-garage/recherche',
            it: '/it/moto-concessionari-garage/ricerca',
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
        },
      ],
    },
    {
      translationKey: 'header.searchMenu.additional',
      items: [
        {
          translationKey: 'header.searchMenu.findPartsAndAccessories',
          link: {
            de: '/de/ersatzteile-zubehoer',
            en: '/de/ersatzteile-zubehoer',
            fr: '/fr/pieces-accessoires',
            it: '/it/ricambi-accessori',
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
        },
        {
          translationKey: 'header.searchMenu.searchMotorcycles',
          link: {
            de: 'https://www.motoscout24.ch/de',
            en: 'https://www.motoscout24.ch/de',
            fr: 'https://www.motoscout24.ch/fr',
            it: 'https://www.motoscout24.ch/it',
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
        },
        {
          translationKey: 'header.searchMenu.searchCars',
          link: {
            de: 'https://www.autoscout24.ch/de',
            en: 'https://www.autoscout24.ch/de',
            fr: 'https://www.autoscout24.ch/fr',
            it: 'https://www.autoscout24.ch/it',
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
        },
        {
          translationKey: 'header.searchMenu.vehicleRating',
          link: {
            de: '/de/content/fahrzeugbewertung',
            en: '/de/content/fahrzeugbewertung',
            fr: '/fr/content/evaluation-vehicule',
            it: '/it/content/valutazione-veicolo',
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
        },
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
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.recentSearches',
          link: {
            de: '/de/letzte-suchen',
            en: '/de/letzte-suchen',
            fr: '/fr/dernieres-recherches',
            it: '/it/ultime-ricerche',
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
        },
      ],
    },
  ],
  user: [
    {
      translationKey: 'header.userMenu.manageVehicles',
      items: [
        {
          translationKey: 'header.userMenu.createAd',
          link: {
            de: '/de/member/insertion/type',
            en: '/de/member/insertion/type',
            fr: '/fr/member/insertion/type',
            it: '/it/member/insertion/type',
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
        },
        {
          translationKey: 'header.userMenu.myVehicles',
          link: {
            de: '/de/member/vehiclepool',
            en: '/de/member/vehiclepool',
            fr: '/fr/member/vehiclepool',
            it: '/it/member/vehiclepool',
          },
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
        },
        {
          translationKey: 'header.userMenu.myVehicles',
          link: {
            de: 'https://dealer.autoscout24.ch/de/vehicles',
            en: 'https://dealer.autoscout24.ch/de/vehicles',
            fr: 'https://dealer.autoscout24.ch/fr/vehicles',
            it: 'https://dealer.autoscout24.ch/it/vehicles',
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
        },
        {
          translationKey: 'header.userMenu.myVehcilesOld',
          link: {
            de: '/de/member/vehiclepool',
            en: '/de/member/vehiclepool',
            fr: '/fr/member/vehiclepool',
            it: '/it/member/vehiclepool',
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
        },
        {
          translationKey: 'header.userMenu.myMotorcycles',
          link: {
            de: 'https://dealer.motoscout24.ch/de/vehicles',
            en: 'https://dealer.motoscout24.ch/de/vehicles',
            fr: 'https://dealer.motoscout24.ch/fr/vehicles',
            it: 'https://dealer.motoscout24.ch/it/vehicles',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.myMotorcycles',
          link: {
            de: '/de/member/vehiclepool',
            en: '/en/member/vehiclepool',
            fr: '/fr/member/vehiclepool',
            it: '/it/member/vehiclepool',
          },
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
        },
        {
          translationKey: 'header.userMenu.dealerDashboard',
          link: {
            de: 'https://dealer.autoscout24.ch/de/login',
            en: 'https://dealer.autoscout24.ch/de/login',
            fr: 'https://dealer.autoscout24.ch/fr/login',
            it: 'https://dealer.autoscout24.ch/it/login',
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
        },
        {
          translationKey: 'header.userMenu.dealerDashboard',
          link: {
            de: 'https://dealer.motoscout24.ch/de',
            en: 'https://dealer.motoscout24.ch/de',
            fr: 'https://dealer.motoscout24.ch/fr',
            it: 'https://dealer.motoscout24.ch/it',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.optimizerPro',
          link: {
            de: '/de/member/optimizerpro',
            en: '/de/member/optimizerpro',
            fr: '/fr/member/optimizerpro',
            it: '/it/member/optimizerpro',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.cockpit',
          link: {
            de: '/de/member/cockpit',
            en: '/de/member/cockpit',
            fr: '/fr/member/cockpit',
            it: '/it/member/cockpit',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.statistics',
          link: {
            de: '/de/member/statistics',
            en: '/de/member/statistics',
            fr: '/fr/member/statistics',
            it: '/it/member/statistics',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.printableList',
          link: {
            de: '/de/member/printvehiclelist',
            en: '/en/member/printvehiclelist',
            fr: '/fr/member/printvehiclelist',
            it: '/it/member/printvehiclelist',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.shoppingCard',
          link: {
            de: '/de/member/insertion/checkout/?steps=40-47',
            en: '/de/member/insertion/checkout/?steps=40-47',
            fr: '/fr/member/insertion/checkout/?steps=40-47',
            it: '/it/member/insertion/checkout/?steps=40-47',
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
        },
        {
          translationKey: 'header.userMenu.motorcyclePark',
          link: {
            de: 'https://www.motoscout24.ch/de/member/vehiclepool',
            en: 'https://www.motoscout24.ch/de/member/vehiclepool',
            fr: 'https://www.motoscout24.ch/fr/member/vehiclepool',
            it: 'https://www.motoscout24.ch/it/member/vehiclepool',
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
        },
        {
          translationKey: 'header.userMenu.carPark',
          link: {
            de: 'https://www.autoscout24.ch/de/member/vehiclepool',
            en: 'https://www.autoscout24.ch/de/member/vehiclepool',
            fr: 'https://www.autoscout24.ch/fr/member/vehiclepool',
            it: 'https://www.autoscout24.ch/it/member/vehiclepool',
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
        },
      ],
    },
    {
      translationKey: 'header.userMenu.toolsForSelling',
      items: [
        {
          translationKey: 'header.userMenu.contactRequests',
          link: {
            de: '/de/member/messagemanager',
            en: '/de/member/messagemanager',
            fr: '/fr/member/messagemanager',
            it: '/it/member/messagemanager',
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
        },
        {
          translationKey: 'header.userMenu.printingCenter',
          link: {
            de: '/de/member/printcenter?status=30',
            en: '/de/member/printcenter?status=30',
            fr: '/fr/member/printcenter?status=30',
            it: '/it/member/printcenter?status=30',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.leasing',
          link: {
            de: '/de/member/leasing',
            en: '/de/member/leasing',
            fr: '/fr/member/leasing',
            it: '/it/member/leasing',
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
        },
        {
          translationKey: 'header.userMenu.topListingPro',
          link: {
            de: '/de/member/toplisting',
            en: '/de/member/toplisting',
            fr: '/fr/member/toplisting',
            it: '/it/member/toplisting',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.topCars',
          link: {
            de: '/de/member/topvehicles',
            en: '/de/member/topvehicles',
            fr: '/fr/member/topvehicles',
            it: '/it/member/topvehicles',
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
        },
        {
          translationKey: 'header.userMenu.topMotos',
          link: {
            de: '/de/member/topvehicles',
            en: '/de/member/topvehicles',
            fr: '/fr/member/topvehicles',
            it: '/it/member/topvehicles',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.boosteras24',
          link: {
            de: 'https://dealer.autoscout24.ch/de/booster',
            en: 'https://dealer.autoscout24.ch/de/booster',
            fr: 'https://dealer.autoscout24.ch/fr/booster',
            it: 'https://dealer.autoscout24.ch/it/booster',
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
          isNew: true,
        },
        {
          translationKey: 'header.userMenu.onlineAdvertising',
          link: {
            de: '/de/member/displayads',
            en: '/de/member/displayads',
            fr: '/fr/member/displayads',
            it: '/it/member/displayads',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.advertisePartsAccessories',
          link: {
            de: '/de/ersatzteile-zubehoer/insertion',
            en: '/de/ersatzteile-zubehoer/insertion',
            fr: '/fr/pieces-accessoires/insertion',
            it: '/it/ricambi-accessori/insertion',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.insuranceComparison',
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
              motoscout24: true,
            },
          },
        },
      ],
    },
    {
      translationKey: 'header.userMenu.toolsForPurchasing',
      items: [
        {
          translationKey: 'header.userMenu.requisitions',
          link: {
            de: '/de/member/searchjobs',
            en: '/de/member/searchjobs',
            fr: '/fr/member/searchjobs',
            it: '/it/member/searchjobs',
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
        },
        {
          translationKey: 'header.userMenu.bookmarks',
          link: {
            de: '/de/member/favorites',
            en: '/de/member/favorites',
            fr: '/fr/member/favorites',
            it: '/it/member/favorites',
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
        },
        {
          translationKey: 'header.userMenu.b2bPlattform',
          link: {
            de: '/de/member/b2bplatform',
            en: '/de/member/b2bplatform',
            fr: '/fr/member/b2bplatform',
            it: '/it/member/b2bplatform',
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
        },
        {
          translationKey: 'header.userMenu.amagServiceLifePool',
          link: {
            de: '/de/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            en: '/de/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            fr: '/fr/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            it: '/it/member/parkingpool/amag?parkingtimedays=9&group=100&cond=49&vehtyp=10',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.efagServiceLifePool',
          link: {
            de: '/de/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            en: '/de/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            fr: '/fr/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            it: '/it/member/parkingpool/efag?group=1&cond=49&vehtyp=10',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.demandCalculator',
          link: {
            de: '/de/member/demandcalculator',
            en: '/de/member/demandcalculator',
            fr: '/fr/member/demandcalculator',
            it: '/it/member/demandcalculator',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.autoRadar',
          link: {
            de: '/de/member/autoradarlauncher/all',
            en: '/de/member/autoradarlauncher/all',
            fr: '/fr/member/autoradarlauncher/all',
            it: '/it/member/autoradarlauncher/all',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.dealerInfoSystem',
          link: {
            de: 'http://bi.scout24.ch',
            en: 'http://bi.scout24.ch',
            fr: 'http://bi.scout24.ch',
            it: 'http://bi.scout24.ch',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.marketPriceCheck',
          link: {
            de: '/de/member/vehicleacquisition',
            en: '/de/member/vehicleacquisition',
            fr: '/fr/member/vehicleacquisition',
            it: 'it/member/vehicleacquisition',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
      ],
    },
    {
      translationKey: 'header.userMenu.accountSettings',
      items: [
        {
          translationKey: 'header.userMenu.emailAddress',
          link: {
            de: '/de/member/masterdata/changeemail',
            en: '/de/member/masterdata/changeemail',
            fr: '/fr/member/masterdata/changeemail',
            it: '/it/member/masterdata/changeemail',
          },
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
        },
        {
          translationKey: 'header.userMenu.editUser',
          link: {
            de: '/de/member/users/list',
            en: '/de/member/users/list',
            fr: '/fr/member/users/list',
            it: '/it/member/users/list',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.changePassword',
          link: {
            de: '/de/member/masterdata/changepassword',
            en: '/de/member/masterdata/changepassword',
            fr: '/fr/member/masterdata/changepassword',
            it: '/it/member/masterdata/changepassword',
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
        },
        {
          translationKey: 'header.userMenu.accountSettings',
          link: {
            de: '/de/member/masterdata/additionalusersettings',
            en: '/de/member/masterdata/additionalusersettings',
            fr: '/fr/member/masterdata/additionalusersettings',
            it: '/it/member/masterdata/additionalusersettings',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: false,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.userLanguage',
          link: {
            de: '/de/member/masterdata/userlanguage',
            en: '/de/member/masterdata/userlanguage',
            fr: '/fr/member/masterdata/userlanguage',
            it: '/it/member/masterdata/userlanguage',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.logout',
          color: 'red.500',
          onClick: onLogout,
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
        },
      ],
    },
    {
      translationKey: 'header.userMenu.settings',
      items: [
        {
          translationKey: 'header.userMenu.infoPage',
          link: {
            de: '/de/member/dealerpageadmin',
            en: '/de/member/dealerpageadmin',
            fr: '/fr/member/dealerpageadmin',
            it: '/it/member/dealerpageadmin',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.contactDetails',
          link: {
            de: '/de/member/masterdata/addressedit',
            en: '/de/member/masterdata/addressedit',
            fr: '/fr/member/masterdata/addressedit',
            it: '/it/member/masterdata/addressedit',
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
        },
        {
          translationKey: 'header.userMenu.openingHours',
          link: {
            de: '/de/member/businesshours',
            en: '/de/member/businesshours',
            fr: '/fr/member/businesshours',
            it: '/it/member/businesshours',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.businessImage',
          link: {
            de: '/de/member/businessimage',
            en: '/de/member/businessimage',
            fr: '/de/member/businessimage',
            it: '/it/member/businessimage',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.editPhotobar',
          link: {
            de: '/de/member/templates/photobar',
            en: '/de/member/templates/photobar',
            fr: '/it/member/templates/photobar',
            it: '/it/member/templates/photobar',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageAdditionalTitles',
          link: {
            de: '/de/member/templates/teaser',
            en: '/de/member/templates/teaser',
            fr: '/fr/member/templates/teaser',
            it: '/it/member/templates/teaser',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageNotes',
          link: {
            de: '/de/member/templates/comment',
            en: '/de/member/templates/comment',
            fr: '/fr/member/templates/comment',
            it: '/it/member/templates/comment',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.qualityLogo',
          link: {
            de: '/de/member/qualilogo',
            en: '/de/member/qualilogo',
            fr: '/fr/member/qualilogo',
            it: '/it/member/qualilogo',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageAutoRadar',
          link: {
            de: '/de/member/autoradar',
            en: '/de/member/autoradar',
            fr: '/fr/member/autoradar',
            it: '/it/member/autoradar',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.hci',
          link: {
            de: '/de/member/hci',
            en: '/de/member/hci',
            fr: '/fr/member/hci',
            it: '/it/member/hci',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.importInfo',
          link: {
            de: '/de/member/importinfo/',
            en: '/de/member/importinfo/',
            fr: '/fr/member/importinfo/',
            it: '/it/member/importinfo/',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.dmsLog',
          link: {
            de: '/de/member/dmsinfo/log',
            en: '/de/member/dmsinfo/log',
            fr: '/fr/member/dmsinfo/log',
            it: '/it/member/dmsinfo/log',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
        },
      ],
    },
  ],
  more: [
    {
      items: [
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
              autoscout24: true,
              motoscout24: false,
            },
          },
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
              private: false,
              professional: true,
              guest: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
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
              professional: false,
            },
            brand: {
              autoscout24: false,
              motoscout24: true,
            },
          },
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
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: false,
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
              autoscout24: true,
              motoscout24: false,
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
              autoscout24: false,
              motoscout24: true,
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
              autoscout24: true,
              motoscout24: false,
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
              autoscout24: false,
              motoscout24: true,
            },
          },
        },
      ],
    },
  ],
});

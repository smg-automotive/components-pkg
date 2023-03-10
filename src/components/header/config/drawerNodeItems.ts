import { NavigationLinkProps } from '../NavigationLink';
import { LinkConfig } from '..';
import {
  NavigationLinkConfigNode,
  NavigationLinkConfigProps,
  resolveVisibility,
} from './converter';

export interface NavigationLinkNode {
  translationKey?: string;
  items: NavigationLinkProps[];
}

export enum DrawerNode {
  Search = 'search',
  User = 'user',
  More = 'more',
}

export type DrawerNodeItems = { [key in DrawerNode]: NavigationLinkNode[] };

type DawerNodeItemsConfig = { [key in DrawerNode]: NavigationLinkConfigNode[] };

const dawerNodeItems: DawerNodeItemsConfig = {
  search: [
    {
      translationKey: 'header.searchMenu.vehicles',
      items: [
        {
          translationKey: 'header.searchMenu.simpleSearch',
          url: {
            de: '/de',
            en: '#',
            fr: '/fr/?vehtyp=10',
            it: '/it',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.advancedSearch',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.searchMotorcycles',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.searchCars',
          url: {
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
            plattform: {
              as24: false,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.vehicleRating',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.insuranceComparison',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.viewedListings',
          url: {
            de: '/de/besuchte-fahrzeuge',
            en: '/de/besuchte-fahrzeuge',
            fr: '/fr/vehicules-visites',
            it: '/it/veicoli-visitat',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.recentSearches',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
            de: '/de/member/insertion/type',
            en: '/de/member/insertion/type',
            fr: '/fr/member/insertion/type/index',
            it: '/it/member/insertion/type/index',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.myVehicles',
          url: {
            de: 'https://dealer.autoscout24.ch/de/vehicles',
            en: 'https://dealer.autoscout24.ch/de/vehicles',
            fr: 'https://dealer.autoscout24.ch/fr/vehicles',
            it: 'https://dealer.autoscout24.ch/it/vehicles',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.myVehcilesOld',
          url: {
            de: '/de/member/vehiclepool',
            en: '/de/member/vehiclepool',
            fr: '/fr/member/vehiclepool',
            it: '/it/member/vehiclepool',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.myMotorcycles',
          url: {
            de: 'https://dealer.autoscout24.ch/de/vehicles',
            en: 'https://dealer.autoscout24.ch/de/vehicles',
            fr: 'https://dealer.autoscout24.ch/fr/vehicles',
            it: 'https://dealer.autoscout24.ch/it/vehicles',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: false,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.myMotorcyclesOld',
          url: {
            de: '/de/member/vehiclepool',
            en: '/de/member/vehiclepool',
            fr: '/fr/member/vehiclepool',
            it: '/it/member/vehiclepool',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: false,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.dealerDashboard',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.optimizerPro',
          url: {
            de: '/de/member/optimizerpro/index',
            en: '/de/member/optimizerpro/index',
            fr: '/fr/member/optimizerpro',
            it: '/it/member/optimizerpro/index',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.cockpit',
          url: {
            de: '/de/member/cockpit/index',
            en: '/de/member/cockpit/index',
            fr: '/fr/member/cockpit',
            it: '/it/member/cockpit/index',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.statistics',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.printableList',
          url: {
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
            plattform: {
              as24: false,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.shoppingCard',
          url: {
            de: '/de/member/insertion/checkout/index?steps=40-47',
            en: '/de/member/insertion/checkout/index?steps=40-47',
            fr: '/fr/member/insertion/checkout/index?steps=40-47',
            it: '/it/member/insertion/checkout/index?steps=40-47',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.motorcyclePark',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.carPark',
          url: {
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
            plattform: {
              as24: false,
              ms24: true,
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
          url: {
            de: '/de/member/messagemanager',
            en: '/de/member/messagemanager',
            fr: '/fr/member/messagemanager',
            it: '/it/member/messagemanager',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.printingCenter',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.testDrives',
          url: {
            de: '/de/member/testdrive/settings',
            en: '/de/member/testdrive/settings',
            fr: '/fr/member/testdrive/settings',
            it: '/it/member/testdrive/settings',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.leasing',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.topListingPro',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.topCars',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.topMotos',
          url: {
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
            plattform: {
              as24: false,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.boosteras24',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
          isNew: true,
        },
        {
          translationKey: 'header.userMenu.onlineAdvertising',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.advertisePartsAccessories',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.reviews',
          url: {
            de: '/de/ip/autoscout24-3175-steffisburg/dealerrating?accountid={accountId}',
            en: '/de/ip/autoscout24-3175-steffisburg/dealerrating?accountid={accountId}',
            fr: '/fr/ip/autoscout24-3175-steffisburg/dealerrating?accountid={accountId}',
            it: '/it/ip/autoscout24-3175-steffisburg/dealerrating?accountid={accountId}',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.insuranceComparison',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.bookmarks',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.b2bPlattform',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.amagServiceLifePool',
          url: {
            de: '/de/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            en: '/de/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            fr: '/fr/member/parkingpool/amag?cond=49&group=100&parkingtimedays=9&vehtyp=10',
            it: '/it/member/parkingpool/amag?parkingtimedays=9&group=100&cond=49&vehtyp=10',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.efagServiceLifePool',
          url: {
            de: '/de/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            en: '/de/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            fr: '/fr/member/parkingpool/efag?cond=49&group=1&vehtyp=10',
            it: '/it/member/parkingpool/efag?group=1&cond=49&vehtyp=10',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.demandCalculator',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.autoRadar',
          url: {
            de: '/de/productdescription/as24_autoradar',
            en: '/de/productdescription/as24_autoradar',
            fr: '/fr/productdescription/as24_autoradar',
            it: '/it/productdescription/as24_autoradar',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.dealerInfoSystem',
          url: {
            de: 'http://bi.scout24.ch',
            en: '#',
            fr: 'http://bi.scout24.ch',
            it: 'http://bi.scout24.ch',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.marketPriceCheck',
          url: {
            de: '/de/member/vehicleacquisition',
            en: '#',
            fr: '/fr/member/vehicleacquisition',
            it: 'it/member/vehicleacquisition',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
      ],
    },
    {
      translationKey: 'header.userMenu.accountSettings',
      items: [
        {
          translationKey: 'header.userMenu.editUser',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.changePassword',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.userLanguage',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.logout',
          color: 'red.500',
          url: {
            de: '/de/account/logoff',
            en: '/de/account/logoff',
            fr: '/fr/account/logoff',
            it: '/it/account/logoff',
          },
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.contactDetails',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.openingHours',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.businessImage',
          url: {
            de: '/de/member/businessimage',
            en: '/de/member/businessimage',
            fr: '/de/member/businessimage',
            it: '/it/member/businessimage',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.editPhotobar',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageAdditionalTitles',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageNotes',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.qualityLogo',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.manageAutoRadar',
          url: {
            de: '/de/productdescription/as24_autoradar',
            en: '/de/productdescription/as24_autoradar',
            fr: '/fr/productdescription/as24_autoradar',
            it: '/it/productdescription/as24_autoradar',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.hci',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.importInfo',
          url: {
            de: '/de/productdescription/as24_service',
            en: '/de/productdescription/as24_service',
            fr: '/fr/productdescription/as24_service',
            it: '/it/productdescription/as24_service',
          },
          visibilitySettings: {
            userType: {
              private: false,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.userMenu.dmsLog',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
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
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.estimate',
          url: {
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
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.assure',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
        {
          translationKey: 'header.carSubscription',
          url: {
            de: '#', // TODO this link might be unnecessary, waiting for confirmation
            en: '#',
            fr: '#',
            it: '#',
          },
          isNew: true,
          showUnderMoreLinkBelow: 'lg',
          visibilitySettings: {
            userType: {
              private: true,
              professional: true,
            },
            plattform: {
              as24: true,
              ms24: false,
            },
          },
        },
        {
          translationKey: 'header.magazine',
          url: {
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
            plattform: {
              as24: true,
              ms24: true,
            },
          },
        },
      ],
    },
  ],
};

const mapDrawerNodeItems = (
  data: LinkConfig & { items: NavigationLinkConfigProps[] }
) =>
  data.items.map((item) => {
    return resolveVisibility({
      ...data,
      item,
    });
  });

const mapDrawerNodes = (
  data: LinkConfig & { nodeEntry: NavigationLinkConfigNode[] }
) =>
  data.nodeEntry.map((node) => {
    const mappedItems = mapDrawerNodeItems({ ...data, items: node.items });

    return {
      ...node,
      items: mappedItems,
    };
  });

export const mapDrawerItemsEntries = (
  data: LinkConfig & { itemsEntires: [string, NavigationLinkConfigNode[]][] }
) =>
  data.itemsEntires.map(([nodeKey, nodes]) => {
    const mappedNodes = mapDrawerNodes({ ...data, nodeEntry: nodes });

    return [nodeKey, mappedNodes];
  });

export const getDrawerNodeItems = (data: LinkConfig): DrawerNodeItems => {
  const itemsEntires = Object.entries(dawerNodeItems);
  const mappedEntries = mapDrawerItemsEntries({ ...data, itemsEntires });

  return Object.fromEntries(mappedEntries);
};

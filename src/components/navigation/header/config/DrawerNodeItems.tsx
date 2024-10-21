import React from 'react';

import { CustomEvent, navigationEventCategory } from 'src/types/tracking';
import { Entitlement } from 'src/types/entitlements';

import { CartIcon } from 'src/components/icons';

import { NavigationLinkProps } from '../links/NavigationLink';
import { shouldShowComparisonLink } from '../ComparisonItem';
import {
  privateAutoScoutSellLinkConfig,
  privateMotoScoutSellLinkConfig,
  professionalSellLinkConfig,
} from './sell';
import { magazineLinkConfig } from './magazine';
import { HeaderNavigationLink } from './headerNavigationLink';
import { NavigationLinkConfigProps } from './headerLinks';
import { estimateLinkConfig } from './estimate';
import { electromobilityLinkConfig } from './electroMobility';
import { comparisonLinkConfig } from './comparison';
import { autoScoutAssureLinkConfig, motoScoutAssureLinkConfig } from './assure';

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

const getComparisonNodeItem = ({
  comparisonItemIds,
  trackEvent,
  eventLabel,
}: {
  comparisonItemIds?: number[] | null;
  trackEvent?: (event: CustomEvent) => void;
  eventLabel: string;
}): NavigationLinkConfigProps[] => {
  return shouldShowComparisonLink(comparisonItemIds)
    ? [
        {
          ...comparisonLinkConfig({ comparisonItemIds }),
          isNew: true,
          onClick: () =>
            trackEvent?.({
              eventCategory: navigationEventCategory,
              eventAction: 'open_comparison_tool',
              eventLabel,
            }),
        },
      ]
    : [];
};

export const drawerNodeItems = ({
  comparisonItemIds,
  trackEvent,
  onLogout,
}: {
  comparisonItemIds?: number[] | null;
  trackEvent?: (event: CustomEvent) => void;
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
            de: '/de/s/advanced',
            en: '/de/s/advanced',
            fr: '/fr/s/advanced',
            it: '/it/s/advanced',
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
        ...getComparisonNodeItem({
          comparisonItemIds,
          trackEvent,
          eventLabel: 'drawer-search',
        }),
      ],
    },
    {
      translationKey: 'header.searchMenu.dealer',
      items: [
        {
          translationKey: 'header.searchMenu.searchMerchant',
          link: {
            de: '/de/sellers',
            en: '/de/sellers',
            fr: '/fr/sellers',
            it: '/it/sellers',
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
            de: '/de/sellers',
            en: '/de/sellers',
            fr: '/fr/sellers',
            it: '/it/sellers',
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
          translationKey: 'header.searchMenu.searchMotorcycles',
          forceMotoscoutLink: true,
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
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.searchMenu.searchCars',
          forceAutoscoutLink: true,
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
              autoscout24: false,
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
              motoscout24: false,
            },
          },
        },
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
        },
        {
          ...privateAutoScoutSellLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...professionalSellLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...privateMotoScoutSellLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...estimateLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...autoScoutAssureLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...motoScoutAssureLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...electromobilityLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
        },
        {
          ...magazineLinkConfig({ trackEvent }),
          showUnderMoreLinkBelow: 'sm',
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
          isInternal: true,
          link: {
            de: '/de/vehicles',
            en: '/de/vehicles',
            fr: '/fr/vehicles',
            it: '/it/vehicles',
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
          isInternal: true,
          link: {
            de: '/de/vehicles',
            en: '/de/vehicles',
            fr: '/fr/vehicles',
            it: '/it/vehicles',
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
          isInternal: true,
          link: {
            de: '/de',
            en: '/de',
            fr: '/fr',
            it: '/it',
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
          entitlementConfig: {
            hideIfEntitlementIsPresent: Entitlement.CockpitFrontend,
            singleRequiredEntitlement: [Entitlement.CockpitFrontend],
          },
        },
        {
          translationKey: 'header.userMenu.dealerDashboard',
          isInternal: true,
          link: {
            de: '/de',
            en: '/de',
            fr: '/fr',
            it: '/it',
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
          translationKey: 'header.userMenu.optimizer',
          link: {
            de: '/de/member/optimizer',
            en: '/de/member/optimizer',
            fr: '/fr/member/optimizer',
            it: '/it/member/optimizer',
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
          entitlementConfig: {
            hideIfEntitlementIsPresent: Entitlement.OptimizerPro,
            singleRequiredEntitlement: [Entitlement.Optimizer],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/optimizer',
              en: '/de/productdescription/optimizer',
              fr: '/fr/productdescription/optimizer',
              it: '/it/productdescription/optimizer',
            },
            missingEntitlementLinkIcon: <CartIcon />,
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
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
          entitlementConfig: {
            hideIfRequiredEntitlementIsMissing: true,
            singleRequiredEntitlement: [Entitlement.OptimizerPro],
          },
        },
        {
          translationKey: 'header.userMenu.cockpit',
          link: {
            de: '/de/cockpit',
            en: '/de/cockpit',
            fr: '/fr/cockpit',
            it: '/it/cockpit',
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
          entitlementConfig: {
            hideIfRequiredEntitlementIsMissing: true,
            singleRequiredEntitlement: [Entitlement.CockpitFrontend],
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
          translationKey: 'header.userMenu.motorcyclePark',
          forceMotoscoutLink: true,
          link: {
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
            brand: {
              autoscout24: true,
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.carPark',
          forceAutoscoutLink: true,
          link: {
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
          translationKey: 'header.userMenu.leasingNew',
          isInternal: true,
          link: {
            de: '/de/leasing-dashboard',
            en: '/de/leasing-dashboard',
            fr: '/fr/leasing-dashboard',
            it: '/it/leasing-dashboard',
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
          entitlementConfig: {
            singleRequiredEntitlement: [
              Entitlement.ListingVisibilityStandard,
              Entitlement.ListingVisibilityPremium,
            ],
            missingEntitlementTranslationKey: 'header.userMenu.topListing',
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
              motoscout24: false,
            },
          },
        },
        {
          translationKey: 'header.userMenu.insuranceComparison',
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
        },
      ],
    },
    {
      translationKey: 'header.userMenu.toolsForPurchasing',
      items: [
        {
          translationKey: 'header.userMenu.requisitions',
          link: {
            de: '/de/me/saved-searches',
            en: '/de/me/saved-searches',
            fr: '/fr/me/saved-searches',
            it: '/it/me/saved-searches',
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
        ...getComparisonNodeItem({
          comparisonItemIds,
          trackEvent,
          eventLabel: 'drawer-user',
        }),
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
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: false,
            },
          },
          entitlementConfig: {
            singleRequiredEntitlement: [
              Entitlement.AutoRadar,
              Entitlement.AutoRadarFast,
            ],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/as24_autoradar ',
              en: '/de/productdescription/as24_autoradar ',
              fr: '/fr/productdescription/as24_autoradar ',
              it: '/it/productdescription/as24_autoradar ',
            },
            missingEntitlementLinkIcon: <CartIcon />,
          },
        },
        {
          translationKey: 'header.userMenu.dealerInfoSystem',
          link: {
            // eslint-disable-next-line sonarjs/no-clear-text-protocols
            de: 'http://bi.scout24.ch',
            // eslint-disable-next-line sonarjs/no-clear-text-protocols
            en: 'http://bi.scout24.ch',
            // eslint-disable-next-line sonarjs/no-clear-text-protocols
            fr: 'http://bi.scout24.ch',
            // eslint-disable-next-line sonarjs/no-clear-text-protocols
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
            it: '/it/member/vehicleacquisition',
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
          entitlementConfig: {
            singleRequiredEntitlement: [Entitlement.OptimizerPro],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/as24_optimizer_pro',
              en: '/de/productdescription/as24_optimizer_pro',
              fr: '/fr/productdescription/as24_optimizer_pro',
              it: '/it/productdescription/as24_optimizer_pro',
            },
            missingEntitlementLinkIcon: <CartIcon />,
          },
        },
        {
          translationKey: 'header.userMenu.marketPriceCheck',
          link: {
            de: '/de/member/vehicleacquisition',
            en: '/de/member/vehicleacquisition',
            fr: '/fr/member/vehicleacquisition',
            it: '/it/member/vehicleacquisition',
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
          entitlementConfig: {
            singleRequiredEntitlement: [
              Entitlement.OptimizerPro,
              Entitlement.Optimizer,
            ],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/as24_optimizer_pro',
              en: '/de/productdescription/as24_optimizer_pro',
              fr: '/fr/productdescription/as24_optimizer_pro',
              it: '/it/productdescription/as24_optimizer_pro',
            },
            missingEntitlementLinkIcon: <CartIcon />,
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
            de: '/de/profile',
            en: '/en/profile',
            fr: '/fr/profile',
            it: '/it/profile',
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
          translationKey: 'header.userMenu.contactDetails',
          link: {
            de: '/de/member/masterdata/addressedit',
            en: '/de/member/masterdata/addressedit',
            fr: '/fr/member/masterdata/addressedit',
            it: '/it/member/masterdata/addressedit',
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
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: true,
            },
          },
          entitlementConfig: {
            singleRequiredEntitlement: [Entitlement.BusinessImage],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/as24_businessimage',
              en: '/de/productdescription/as24_businessimage',
              fr: '/fr/productdescription/as24_businessimage',
              it: '/it/productdescription/as24_businessimage',
            },
            missingEntitlementLinkIcon: <CartIcon />,
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
              professional: true,
            },
            brand: {
              autoscout24: true,
              motoscout24: false,
            },
          },
          entitlementConfig: {
            singleRequiredEntitlement: [
              Entitlement.AutoRadar,
              Entitlement.AutoRadarFast,
            ],
            missingEntitlementFallbackLink: {
              de: '/de/productdescription/as24_autoradar ',
              en: '/de/productdescription/as24_autoradar ',
              fr: '/fr/productdescription/as24_autoradar ',
              it: '/it/productdescription/as24_autoradar ',
            },
            missingEntitlementLinkIcon: <CartIcon />,
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
        {
          translationKey: 'header.userMenu.infoPortal',
          link: {
            de: 'https://as-partner.aryxe.tech/',
            en: 'https://as-partner.aryxe.tech/',
            fr: 'https://as-partner.aryxe.tech/fr/page-daccueil/',
            it: 'https://as-partner.aryxe.tech/it/',
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
      ],
    },
  ],
  more: [
    {
      items: [
        privateAutoScoutSellLinkConfig({ trackEvent }),
        professionalSellLinkConfig({ trackEvent }),
        privateMotoScoutSellLinkConfig({ trackEvent }),
        estimateLinkConfig({ trackEvent }),
        autoScoutAssureLinkConfig({ trackEvent }),
        motoScoutAssureLinkConfig({ trackEvent }),
        electromobilityLinkConfig({ trackEvent }),
        magazineLinkConfig({ trackEvent }),
      ],
    },
  ],
});

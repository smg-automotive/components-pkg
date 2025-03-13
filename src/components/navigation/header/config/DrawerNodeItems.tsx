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
import {
  advancedSearchLinkConfig,
  autoScoutSellerSearchLinkConfig,
  motoScoutSellerSearchLinkConfig,
  searchCarsLinkConfig,
  searchMotorcycleLinkConfig,
  simpleSearchLinkConfig,
} from './search';
import { magazineLinkConfig } from './magazine';
import {
  autoScoutInsuranceComparisonLinkConfig,
  motoScoutInsuranceComparisonLinkConfig,
} from './insuranceComparison';
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
  Combined = 'combined',
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

type GetNodeItemsArgs = {
  comparisonItemIds?: number[] | null;
  sellerId?: string;
  trackEvent?: (event: CustomEvent) => void;
  onLogout: () => void;
};

const getUserNodeItems = ({
  sellerId,
  onLogout,
  trackEvent,
  comparisonItemIds,
}: GetNodeItemsArgs): NavigationLinkConfigNode[] => [
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
          de: '/de/vehicle-management',
          en: '/en/vehicle-management',
          fr: '/fr/vehicle-management',
          it: '/it/vehicle-management',
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
        projectIdentifier: 'seller-web',
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
          de: '/de/vehicle-management',
          en: '/en/vehicle-management',
          fr: '/fr/vehicle-management',
          it: '/it/vehicle-management',
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
        projectIdentifier: 'seller-web',
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
        projectIdentifier: 'seller-web',
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
        translationKey: 'header.userMenu.motorcyclePark',
        forceMotoscoutLink: true,
        link: {
          de: '/de/vehicle-management',
          en: '/de/vehicle-management',
          fr: '/fr/vehicle-management',
          it: '/it/vehicle-management',
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
        projectIdentifier: 'seller-web',
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
        translationKey: 'header.userMenu.carPark',
        forceAutoscoutLink: true,
        link: {
          de: '/de/vehicle-management',
          en: '/de/vehicle-management',
          fr: '/fr/vehicle-management',
          it: '/it/vehicle-management',
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
            professional: false,
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
        projectIdentifier: 'listings-web',
      },
      {
        translationKey: 'header.userMenu.bookmarks',
        link: {
          de: '/de/me/favorites',
          en: '/de/me/favorites',
          fr: '/fr/me/favorites',
          it: '/it/me/favorites',
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
        projectIdentifier: 'listings-web',
      },
      ...getComparisonNodeItem({
        comparisonItemIds,
        trackEvent,
        eventLabel: 'drawer-user',
      }),
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
          de: 'https://bi.scout24.ch',
          en: 'https://bi.scout24.ch',
          fr: 'https://bi.scout24.ch',
          it: 'https://bi.scout24.ch',
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
          de: '/de/account/change-email',
          en: '/en/account/change-email',
          fr: '/fr/account/change-email',
          it: '/it/account/change-email',
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
            professional: true,
          },
          brand: {
            autoscout24: true,
            motoscout24: true,
          },
        },
        projectIdentifier: 'seller-web',
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
          de: 'https://b2b.autoscout24.ch/',
          en: 'https://b2b.autoscout24.ch/',
          fr: 'https://b2b.autoscout24.ch/fr/',
          it: 'https://b2b.autoscout24.ch/it/',
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
];

export const drawerNodeItems = ({
  comparisonItemIds,
  sellerId,
  trackEvent,
  onLogout,
}: GetNodeItemsArgs): DrawerNodeItemsConfig => ({
  search: [
    {
      translationKey: 'header.searchMenu.vehicles',
      items: [
        simpleSearchLinkConfig,
        advancedSearchLinkConfig,
        ...getComparisonNodeItem({
          comparisonItemIds,
          trackEvent,
          eventLabel: 'drawer-search',
        }),
      ],
    },
    {
      translationKey: 'header.searchMenu.dealer',
      items: [autoScoutSellerSearchLinkConfig, motoScoutSellerSearchLinkConfig],
    },
    {
      translationKey: 'header.searchMenu.additional',
      items: [
        searchMotorcycleLinkConfig,
        searchCarsLinkConfig,
        autoScoutInsuranceComparisonLinkConfig,
        motoScoutInsuranceComparisonLinkConfig,
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
  user: getUserNodeItems({ sellerId, onLogout, trackEvent, comparisonItemIds }),
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
  combined: [
    {
      translationKey: 'header.search',
      items: [
        simpleSearchLinkConfig,
        advancedSearchLinkConfig,
        ...getComparisonNodeItem({
          comparisonItemIds,
          trackEvent,
          eventLabel: 'drawer-search',
        }),
        autoScoutSellerSearchLinkConfig,
        motoScoutSellerSearchLinkConfig,
        searchMotorcycleLinkConfig,
        searchCarsLinkConfig,
      ],
    },
    {
      translationKey: 'header.sell',
      items: [
        privateAutoScoutSellLinkConfig({ trackEvent }),
        professionalSellLinkConfig({ trackEvent }),
        privateMotoScoutSellLinkConfig({ trackEvent }),
        estimateLinkConfig({ trackEvent }),
      ],
    },
    {
      translationKey: 'header.searchMenu.additional',
      items: [
        autoScoutInsuranceComparisonLinkConfig,
        motoScoutInsuranceComparisonLinkConfig,
        autoScoutAssureLinkConfig({ trackEvent }),
        motoScoutAssureLinkConfig({ trackEvent }),
        electromobilityLinkConfig({ trackEvent }),
        magazineLinkConfig({ trackEvent }),
      ],
    },
    ...getUserNodeItems({ sellerId, onLogout, trackEvent, comparisonItemIds }),
  ],
});

import { Language } from '@smg-automotive/i18n-pkg';

import { CustomEvent } from 'src/types/tracking';

import { NavigationLinkProps } from '../links/NavigationLink';
import {
  autoScoutVehiclesLinkConfig,
  motoScoutVehiclesLinkConfig,
} from './vehiclePool';
import { carParkLinkConfig, motorcycleParkLinkConfig } from './vehiclePool';
import {
  changeLanguageLinkConfig,
  editUsersLinkConfig,
  getFavoritesLinkConfig,
  getLogoutLinkConfig,
  savedSearchesLinkConfig,
} from './user';
import {
  autoScoutTopVehiclesLinkConfig,
  motoScoutTopVehiclesLinkConfig,
} from './topVehicles';
import { topListingProLinkConfig } from './topListing';
import {
  commentTemplatesLinkConfig,
  teaserTemplatesLinkConfig,
} from './templates';
import { insertionLinkConfig } from './sell';
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
import { printCenterLinkConfig } from './print';
import { printableVehiclesListLinkConfig } from './print';
import {
  businessImageLinkConfig,
  contactDetailsLinkConfig,
  infoPageLinkConfig,
  openingHoursLinkConfig,
  photoBarLinkConfig,
  qualilogoLinkConfig,
} from './Presence';
import { getPartnerHubLinkConfig } from './partnerHub';
import { optimizerLinkConfig } from './Optimizer';

import { magazineLinkConfig } from './magazine';
import { leadsManagementLinkConfig } from './leadsManagement';
import {
  switchToFrenchLinkConfig,
  switchToGermanLinkConfig,
  switchToItalianLinkConfig,
} from './language';
import {
  getAutoScoutInsuranceComparisonLinkConfig,
  getMotoScoutInsuranceComparisonLinkConfig,
  getProfessionalAutoScoutInsuranceComparisonLinkConfig,
} from './insuranceComparison';
import { infoPortalLinkConfig } from './infoPortal';
import { importInfoLinkConfig } from './importInfo';
import { HeaderNavigationLink } from './headerNavigationLink';
import { NavigationLinkConfigProps } from './headerLinks';
import { hciLinkConfig } from './hci';
import { estimateLinkConfig } from './estimate';
import { electromobilityLinkConfig } from './electroMobility';
import { dmsLogLinkConfig } from './dmsLog';
import { getComparisonNodeItem } from './comparison';
import { cockpitLinkConfig } from './cockpit';
import { autoRadarLinkConfig, manageAutoRadarLinkConfig } from './AutoRadar';
import { autoScoutAssureLinkConfig, motoScoutAssureLinkConfig } from './assure';
import { onlineAdvertisingLinkConfig } from './advertise';

export interface NavigationLinkNode {
  translationKey?: string;
  title?: string;
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
      insertionLinkConfig,
      autoScoutVehiclesLinkConfig,
      motoScoutVehiclesLinkConfig,
      optimizerLinkConfig,
      cockpitLinkConfig,
      printableVehiclesListLinkConfig,
      carParkLinkConfig,
      motorcycleParkLinkConfig,
    ],
  },
  {
    translationKey: 'header.userMenu.toolsForSelling',
    items: [
      leadsManagementLinkConfig,
      printCenterLinkConfig,
      getPartnerHubLinkConfig({ sellerId }),
      topListingProLinkConfig,
      autoScoutTopVehiclesLinkConfig,
      motoScoutTopVehiclesLinkConfig,
      onlineAdvertisingLinkConfig,
      getProfessionalAutoScoutInsuranceComparisonLinkConfig({ sellerId }),
      getAutoScoutInsuranceComparisonLinkConfig({
        private: true,
        professional: false,
      }),
      getMotoScoutInsuranceComparisonLinkConfig({
        private: true,
        professional: false,
      }),
    ],
  },
  {
    translationKey: 'header.userMenu.toolsForPurchasing',
    items: [
      savedSearchesLinkConfig,
      getFavoritesLinkConfig({
        trackEvent,
        eventLabel: 'drawer-user',
      }),
      ...getComparisonNodeItem({
        comparisonItemIds,
        trackEvent,
        eventLabel: 'drawer-user',
      }),
      autoRadarLinkConfig,
    ],
  },
  {
    translationKey: 'header.userMenu.accountSettings',
    items: [
      editUsersLinkConfig,
      changeLanguageLinkConfig,
      getLogoutLinkConfig({ onLogout }),
    ],
  },
  {
    translationKey: 'header.userMenu.settings',
    items: [
      infoPageLinkConfig,
      contactDetailsLinkConfig,
      openingHoursLinkConfig,
      businessImageLinkConfig,
      photoBarLinkConfig,
      teaserTemplatesLinkConfig,
      commentTemplatesLinkConfig,
      qualilogoLinkConfig,
      manageAutoRadarLinkConfig,
      hciLinkConfig,
      importInfoLinkConfig,
      dmsLogLinkConfig,
      infoPortalLinkConfig,
    ],
  },
];

export const drawerNodeItems = ({
  comparisonItemIds,
  sellerId,
  trackEvent,
  onLogout,
  currentLanguage,
  isLoggedIn,
}: GetNodeItemsArgs & {
  currentLanguage: Language;
  isLoggedIn: boolean;
}): DrawerNodeItemsConfig => ({
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
        getAutoScoutInsuranceComparisonLinkConfig({
          private: true,
          professional: true,
        }),
        getMotoScoutInsuranceComparisonLinkConfig({
          private: true,
          professional: true,
        }),
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
        getAutoScoutInsuranceComparisonLinkConfig({
          private: true,
          professional: true,
        }),
        getMotoScoutInsuranceComparisonLinkConfig({
          private: true,
          professional: true,
        }),
        autoScoutAssureLinkConfig({ trackEvent }),
        motoScoutAssureLinkConfig({ trackEvent }),
        electromobilityLinkConfig({ trackEvent }),
        magazineLinkConfig({ trackEvent }),
      ],
    },
    ...(isLoggedIn
      ? getUserNodeItems({ sellerId, onLogout, trackEvent, comparisonItemIds })
      : []),
    {
      title: currentLanguage.toUpperCase(),
      items: [
        switchToGermanLinkConfig({ currentLanguage }),
        switchToFrenchLinkConfig({ currentLanguage }),
        switchToItalianLinkConfig({ currentLanguage }),
      ],
    },
  ],
});

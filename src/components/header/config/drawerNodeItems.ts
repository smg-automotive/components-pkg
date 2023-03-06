import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.searchMenu.vehicleRating',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.myVehcilesOld',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.dealerDashboard',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.shoppingCard',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
      translationKey: 'header.userMenu.toolsForSelling',
      items: [
        {
          translationKey: 'header.userMenu.contactRequests',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.leasing',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.optimizerProToolsForSelling',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.topListingPro',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.boosteras24',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          isNew: true,
        },
        {
          translationKey: 'header.userMenu.onlineAdvertising',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.amagServiceLifePool',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.efagServiceLifePool',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.demandCalculator',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.dealerInfoSystem',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
          translationKey: 'header.userMenu.hci',
          url: {
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
            de: '#',
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
            de: '#',
            en: '#',
            fr: '#',
            it: '#',
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
  userType: UserType,
  plattform: Plattform,
  items: NavigationLinkConfigProps[]
) =>
  items.map((item) =>
    resolveVisibility({
      item,
      userType,
      plattform,
    })
  );

const mapDrawerNodes = (
  userType: UserType,
  plattform: Plattform,
  nodeEntry: NavigationLinkConfigNode[]
) =>
  nodeEntry.map((node) => {
    const mappedItems = mapDrawerNodeItems(userType, plattform, node.items);

    return {
      ...node,
      items: mappedItems,
    };
  });

const mapDrawerItemsEntries = (
  userType: UserType,
  plattform: Plattform,
  itemsEntires: [string, NavigationLinkConfigNode[]][]
) =>
  itemsEntires.map(([nodeKey, nodes]) => {
    const mappedNodes = mapDrawerNodes(userType, plattform, nodes);

    return [nodeKey, mappedNodes];
  });

export const getDrawerNodeItems = ({
  userType,
  plattform,
}: {
  userType: UserType;
  plattform: Plattform;
}): DrawerNodeItems => {
  const itemsEntires = Object.entries(dawerNodeItems);
  const mappedEntries = mapDrawerItemsEntries(
    userType,
    plattform,
    itemsEntires
  );

  return Object.fromEntries(mappedEntries);
};

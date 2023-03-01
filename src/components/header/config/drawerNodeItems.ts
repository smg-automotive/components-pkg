import { NavigationLinkProps } from '../NavigationLink';
import { Plattform, UserType } from '..';
import {
  NavigationLinkConfigNode,
  NavigationLinkConfigProps,
  resolveVisibility,
} from './converter';

export interface NavigationLinkNode {
  text?: string;
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
      text: 'Farzeuge',
      items: [
        {
          text: 'Einfache Suche',
          url: '#',
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
          text: 'Erweiterte Suche',
          url: '#',
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
      text: 'Händler',
      items: [
        {
          text: 'Händler suchen',
          url: '#',
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
      text: 'Weiteres',
      items: [
        {
          text: 'Teile & Zubehör suchen',
          url: '#',
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
          text: 'Motoräder suchen',
          url: '#',
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
          text: 'Fahrzeugbewertung',
          url: '#',
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
          text: 'Versicherungsvergleich',
          url: '#',
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
          text: 'Angesehene Inserate',
          url: '#',
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
          text: 'Letzte Suchen',
          url: '#',
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
      text: ' Fahrzeuge verwalten',
      items: [
        {
          text: 'Inserat erstellen',
          url: '#',
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
          text: 'Meine Fahrzeuge',
          url: '#',
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
          text: 'Meine Fahrzeuge (alt)',
          url: '#',
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
          text: 'DealerDashboard',
          url: '#',
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
          text: 'OptimizerPro',
          url: '#',
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
          text: 'Cockpit',
          url: '#',
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
          text: 'Statistiken',
          url: '#',
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
          text: 'Warenkorb',
          url: '#',
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
          text: 'Zum Motorradpark',
          url: '#',
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
      text: 'Tools für den Verkauf',
      items: [
        {
          text: 'Kontaktanfragen',
          url: '#',
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
          text: 'Druckcenter',
          url: '#',
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
          text: 'Probefahrten',
          url: '#',
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
          text: 'Leasing',
          url: '#',
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
          text: 'OptimizerPro',
          url: '#',
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
          text: 'TopListing Pro',
          url: '#',
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
          text: 'TopCars',
          url: '#',
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
          text: ' Boosteras24',
          url: '#',
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
          text: 'Online Werbung',
          url: '#',
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
          text: 'Teile, Zubehör inserieren',
          url: '#',
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
          text: 'Bewertungen',
          url: '#',
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
          text: 'Versicherungsvergleich',
          url: '#',
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
      text: 'Tools für den Einkauf',
      items: [
        {
          text: 'Suchaufträge',
          url: '#',
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
          text: 'Merkliste',
          url: '#',
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
          text: 'B2B-Plattform',
          url: '#',
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
          text: 'AMAG StandzeitenPool',
          url: '#',
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
          text: 'EFAG StandzeitenPool',
          url: '#',
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
          text: 'Nachfragekalkulator',
          url: '#',
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
          text: 'AutoRadar',
          url: '#',
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
          text: 'DealerInfoSystem',
          url: '#',
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
          text: 'MarketPriceCheck',
          url: '#',
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
      text: 'Kontoeinstellungen',
      items: [
        {
          text: 'Benutzer bearbeiten',
          url: '#',
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
          text: 'Passwort ändern',
          url: '#',
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
          text: 'Benutzersprache',
          url: '#',
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
          text: 'Abmelden',
          url: '#',
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
      text: 'Einstellungen',
      items: [
        {
          text: 'InfoPage',
          url: '#',
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
          text: 'Kontaktangaben',
          url: '#',
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
          text: 'Öffnungszeiten',
          url: '#',
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
          text: 'BusinessImage',
          url: '#',
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
          text: 'Photobar bearbeiten',
          url: '#',
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
          text: 'Zusatztitel verwalten',
          url: '#',
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
          text: 'Bemerkungen verwalten',
          url: '#',
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
          text: 'Qualitätslogo',
          url: '#',
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
          text: 'AutoRadar verwalten',
          url: '#',
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
          text: 'HCI',
          url: '#',
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
          text: 'ImportInfo',
          url: '#',
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
          text: 'DmsLog',
          url: '#',
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
          text: 'Verkaufen',
          url: '#',
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
          text: 'Schätzen',
          url: '#',
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
          text: 'Versichern',
          url: '#',
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
          text: 'Auto-Abo',
          url: '#',
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
          text: 'Magazin',
          url: '#',
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

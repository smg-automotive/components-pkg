import { NavigationLinkProps } from '../NavigationLink';

export interface NavigationLinkNode {
  text: string;
  items: NavigationLinkProps[];
}
export type DrawerNode = 'search' | 'user';
export type DawerNodeItems = { [key in DrawerNode]: NavigationLinkNode[] };

export const dawerNodeItems: DawerNodeItems = {
  search: [
    {
      text: 'Farzeuge',
      items: [
        { text: 'Einfache Suche', url: '#' },
        { text: 'Erweiterte Suche', url: '#' },
      ],
    },
    {
      text: 'Händler',
      items: [{ text: 'Händler suchen', url: '#' }],
    },
    {
      text: 'Weiteres',
      items: [
        { text: 'Teile & Zubehör suchen', url: '#' },
        { text: 'Motoräder suchen', url: '#' },
        { text: 'Fahrzeugbewertung', url: '#' },
        { text: 'Versicherungsvergleich', url: '#' },
        { text: 'Angesehene Inserate', url: '#' },
        { text: 'Letzte Suchen', url: '#' },
      ],
    },
  ],
  user: [
    {
      text: ' Fahrzeuge verwalten',
      items: [
        { text: 'Inserat erstellen', url: '#' },
        { text: 'Meine Fahrzeuge', url: '#' },
        { text: 'Meine Fahrzeuge (alt)', url: '#' },
        { text: 'DealerDashboard', url: '#' },
        { text: 'OptimizerPro', url: '#' },
        { text: 'Cockpit', url: '#' },
        { text: 'Statistiken', url: '#' },
        { text: 'Warenkorb', url: '#' },
        { text: 'Zum Motorradpark', url: '#' },
      ],
    },
    {
      text: 'Tools für den Verkauf',
      items: [
        { text: 'Kontaktanfragen', url: '#' },
        { text: 'Druckcenter', url: '#' },
        { text: 'Probefahrten', url: '#' },
        { text: 'Leasing', url: '#' },
        { text: 'OptimizerPro', url: '#' },
        { text: 'TopListing Pro', url: '#' },
        { text: 'TopCars', url: '#' },
        { text: ' Boosteras24', url: '#', isNew: true },
        { text: 'Online Werbung', url: '#' },
        { text: 'Teile, Zubehör inserieren', url: '#' },
        { text: 'Bewertungen', url: '#' },
        { text: 'Versicherungsvergleich', url: '#' },
      ],
    },
    {
      text: 'Tools für den Einkauf',
      items: [
        { text: 'Suchaufträge', url: '#' },
        { text: 'Merkliste', url: '#' },
        { text: 'B2B-Plattform', url: '#' },
        { text: 'AMAG StandzeitenPool', url: '#' },
        { text: 'EFAG StandzeitenPool', url: '#' },
        { text: 'Nachfragekalkulator', url: '#' },
        { text: 'AutoRadar', url: '#' },
        { text: 'DealerInfoSystem', url: '#' },
        { text: 'MarketPriceCheck', url: '#' },
      ],
    },
    {
      text: 'Kontoeinstellungen',
      items: [
        { text: 'Benutzer bearbeiten', url: '#' },
        { text: 'Passwort ändern', url: '#' },
        { text: 'Benutzersprache', url: '#' },
        { text: 'Abmelden', url: '#' },
      ],
    },
    {
      text: 'Einstellungen',
      items: [
        { text: 'InfoPage', url: '#' },
        { text: 'Kontaktangaben', url: '#' },
        { text: 'Öffnungszeiten', url: '#' },
        { text: 'BusinessImage', url: '#' },
        { text: 'Photobar bearbeiten', url: '#' },
        { text: 'Zusatztitel verwalten', url: '#' },
        { text: 'Bemerkungen verwalten', url: '#' },
        { text: 'Qualitätslogo', url: '#' },
        { text: 'AutoRadar verwalten', url: '#' },
        { text: 'HCI', url: '#' },
        { text: 'ImportInfo', url: '#' },
        { text: 'DmsLog', url: '#' },
      ],
    },
  ],
};

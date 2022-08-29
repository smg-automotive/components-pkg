import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from 'react';
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

// eslint-disable-next-line import/no-internal-modules
import BaseGrid from '../layout/BaseGrid';
import logo from '../../assets/images/autoScout24Logo.webp';
import CollapsibleSection from './CollapsibleSection';
import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import NavigationDrawer from './NawigationDrawer';

const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (!isLargerThan1024) return null;

  return <>{children}</>;
};

export interface NavigationLinkNode {
  text: string;
  items: NavigationLinkProps[];
}

interface NavigationConfiguration {
  homeUrl: string;
  currentLanguage: string;
  user: {
    id: number;
    name: string;
  } | null;
  searchItems: NavigationLinkNode[];
  headerLinks: NavigationLinkProps[];
  userItems: NavigationLinkNode[];
}

const Navigation: FC = () => {
  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: 'en',
    user: {
      id: 123,
      name: 'John Doe',
    },
    searchItems: [
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
    headerLinks: [
      { text: 'Verkaufen', url: '#' },
      { text: 'Schätzen', url: '#' },
      { text: 'Versichern', url: '#' },
      { text: 'Auto-Abo', url: '#', isNew: true },
      { text: 'Magazin', url: '#' },
    ],
    userItems: [
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

  // TODO: handle this propers
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const accordionsEnabled = !isLargerThan1024;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawer, setDrawer] = useState({
    current: null,
    nodes: [],
  });

  const menuHeight = '60px';

  return (
    <>
      <Box
        width="full"
        height={menuHeight}
        background="gray.100"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        zIndex="menu"
        position="absolute"
      >
        <img width="144px" height="34px" src={logo} />
        {/* TODO: replace logog quality */}
        <Box
          onClick={() => {
            const nodeName = 'search';
            if (!isOpen) {
              setDrawer({
                nodes: config.searchItems,
                current: nodeName,
              });
              onOpen();
              return;
            }

            if (drawer.current !== nodeName) {
              onClose();
              // Note: can be wrapped in a set timeout for slideup and down variations
              setDrawer({
                nodes: config.searchItems,
                current: nodeName,
              });
              onOpen();
              return;
            }

            onClose();
          }}
          cursor="pointer"
          color="blue.700"
        >
          Suche
        </Box>
        <DesktopOnly>
          {config.headerLinks.map((link) => (
            <NavigationLink {...link} />
          ))}
        </DesktopOnly>

        {config.user ? (
          <HStack
            spacing="1rem"
            onClick={() => {
              const nodeName = 'user';
              if (!isOpen) {
                setDrawer({
                  nodes: config.userItems,
                  current: nodeName,
                });
                onOpen();
                return;
              }

              if (drawer.current !== nodeName) {
                onClose();
                setDrawer({
                  nodes: config.userItems,
                  current: nodeName,
                });
                onOpen();
                return;
              }

              onClose();
            }}
          >
            <Avatar color="grey.400" />
            <span>
              {config.user.id}-{config.user.name}
            </span>
          </HStack>
        ) : (
          <HStack spacing="1rem">
            <Avatar color="grey.400" />
            <span>Login</span>
          </HStack>
        )}

        <DesktopOnly>
          <Menu>
            <MenuButton>Language</MenuButton>
            <MenuList>
              <MenuItem as="a" href="/de">
                DE
              </MenuItem>
              <MenuItem as="a" href="/fr">
                FR
              </MenuItem>
              <MenuItem as="a" href="/it">
                IT
              </MenuItem>
              <MenuItem as="a" href="/en">
                EN
              </MenuItem>
            </MenuList>
          </Menu>
        </DesktopOnly>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent marginTop={menuHeight}>
            <DrawerBody py="2xl" px="0">
              <BaseGrid height="full">
                {drawer.nodes.map((node, index) => (
                  <CollapsibleSection
                    key={`node-${index}`}
                    node={node}
                    accordionsEnabled={accordionsEnabled}
                  />
                ))}
              </BaseGrid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

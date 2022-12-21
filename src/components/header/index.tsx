import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
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
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';

// eslint-disable-next-line import/no-internal-modules

import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { getHeaderLinks } from './config/headerLinks';
import { DawerNodeItems, getDrawerNodeItems } from './config/drawerNodeItems';
import CollapsibleSection from './CollapsibleSection';
import BaseGrid from '../layout/BaseGrid';

// TODO: make dynamic
import Avatar from '../avatar';
import logoMS from '../../assets/images/logo_ms24.svg';
import logoAS from '../../assets/images/logo_as24.svg';

const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (!isLargerThan1024) return null;

  return <>{children}</>;
};

interface NavigationConfiguration {
  homeUrl: string;
  currentLanguage: string;
  menuHeight: string;
  user: User | null;
  dawerNodeItems: DawerNodeItems;
  headerLinks: NavigationLinkProps[];
}

interface User {
  id: number;
  name: string;
  type: 'private' | 'professional';
}

export type UserType = 'private' | 'professional';
export type Plattform = 'as24' | 'ms24';

interface NavigationProps {
  user: User;
}

const Navigation: FC<NavigationProps> = ({ user }) => {
  const { name } = useTheme();
  const plattform: Plattform = name === 'AutoScout 24' ? 'as24' : 'ms24';
  const linkConfig = {
    userType: user.type,
    plattform,
  };
  const logo = plattform === 'as24' ? logoAS : logoMS;

  console.log('theme', name);
  console.log('plattform', plattform);

  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: 'en',
    user,
    menuHeight: '60px',
    dawerNodeItems: getDrawerNodeItems(linkConfig),
    headerLinks: getHeaderLinks(linkConfig),
  };

  // TODO: handle this propers
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const accordionsEnabled = !isLargerThan1024;

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    dawerNodeItems: config.dawerNodeItems,
  });

  return (
    <>
      <Box
        width="full"
        height={config.menuHeight}
        background="gray.100"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        zIndex="header"
        position="absolute"
      >
        <img width="144px" height="34px" src={logo} />
        {/* TODO: replace logo quality */}
        <Box
          onClick={createDrawerHandler({
            nodeName: 'search',
          })}
          cursor="pointer"
          color="blue.700"
        >
          Suche
        </Box>
        <DesktopOnly>
          {config.headerLinks.map((link, index) => (
            <NavigationLink key={`link-${index}`} {...link} />
          ))}
        </DesktopOnly>

        {config.user ? (
          <HStack
            spacing="1rem"
            onClick={createDrawerHandler({
              nodeName: 'user',
            })}
          >
            <Avatar />
            <span>
              {config.user.id}-{config.user.name}
            </span>
          </HStack>
        ) : (
          <HStack spacing="1rem">
            <Avatar />
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
          <DrawerContent marginTop={config.menuHeight}>
            <DrawerBody py="2xl" px="0">
              <BaseGrid height="full">
                {drawer?.nodes.map((node, index) => (
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

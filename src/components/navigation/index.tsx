import React, { FC, PropsWithChildren, ReactNode } from 'react';
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
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import {
  dawerNodeItems,
  DawerNodeItems,
  NavigationLinkNode,
} from './config/drawerNodeItems';
import { headerLinks } from './config/headerLinks';

const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (!isLargerThan1024) return null;

  return <>{children}</>;
};

interface NavigationConfiguration {
  homeUrl: string;
  currentLanguage: string;
  menuHeight: string;
  user: {
    id: number;
    name: string;
  } | null;
  dawerNodeItems: DawerNodeItems;
  headerLinks: NavigationLinkProps[];
}

const Navigation: FC = () => {
  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: 'en',
    user: {
      id: 123,
      name: 'John Doe',
    },
    menuHeight: '60px',
    dawerNodeItems,
    headerLinks,
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
        zIndex="menu"
        position="absolute"
      >
        <img width="144px" height="34px" src={logo} />
        {/* TODO: replace logog quality */}
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
          {config.headerLinks.map((link) => (
            <NavigationLink {...link} />
          ))}
        </DesktopOnly>

        {config.user ? (
          <HStack
            spacing="1rem"
            onClick={createDrawerHandler({
              nodeName: 'user',
            })}
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

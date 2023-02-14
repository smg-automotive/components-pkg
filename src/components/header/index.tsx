import React, { FC, PropsWithChildren, ReactNode } from 'react';

// eslint-disable-next-line import/no-internal-modules

import {
  DrawerBody,
  HStack,
  useMultiStyleConfig,
  useTheme,
} from '@chakra-ui/react';

import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { getHeaderLinks } from './config/headerLinks';
import { DawerNodeItems, getDrawerNodeItems } from './config/drawerNodeItems';
import CollapsibleSection from './CollapsibleSection';
import Stack from '../stack';
import Menu from '../menu';
import BaseGrid from '../layout/BaseGrid';

// TODO: update the hook
import { ChevronDownSmallIcon } from '../icons';
import useMediaQuery from '../hooks/useMediaQuery';
// TODO: make dynamic
import DrawerOverlay from '../drawer/DrawerOverlay';
import DrawerContent from '../drawer/DrawerContent';
import Drawer from '../drawer';
import Box from '../box';
import Avatar from '../avatar';
import logoMS from '../../assets/images/logo_ms24.svg';
import logoAS from '../../assets/images/logo_as24.svg';

const DesktopOnly = ({ children }: { children: ReactNode }) => {
  const isLargerThan1024 = useMediaQuery({ above: 'md' });

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
  const isLargerThan1024 = useMediaQuery({ above: 'md' });
  const accordionsEnabled = !isLargerThan1024;

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    dawerNodeItems: config.dawerNodeItems,
  });

  const linkStypes = useMultiStyleConfig('Link', { variant: 'headerLink' });

  return (
    <>
      <Box
        width="full"
        height={config.menuHeight}
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        px="2rem"
        zIndex="header"
        position="absolute"
      >
        <Stack direction="row" spacing="2xl" align="center">
          <img width="144px" height="34px" src={logo} />
          {/* TODO: replace logo quality */}
          {/* extract navigation links to separate component */}
          <Box
            onClick={createDrawerHandler({
              nodeName: 'search',
            })}
            __css={linkStypes.link}
          >
            Suche <ChevronDownSmallIcon />
          </Box>
          <DesktopOnly>
            {config.headerLinks.map((link, index) => (
              <NavigationLink key={`link-${index}`} {...link} />
            ))}
          </DesktopOnly>
        </Stack>
        <Stack direction="row" spacing="2xl" align="center">
          {config.user ? (
            <HStack
              spacing="xxs"
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
            <Box
              as={Menu}
              title="DE"
              variant="menuBold"
              items={[
                { text: 'DE', onClick: () => null },
                { text: 'FR', onClick: () => null },
                { text: 'IT', onClick: () => null },
                { text: 'EN', onClick: () => null },
              ]}
            >
              {/* <Menu
                title="DE"
                items={[
                  { text: 'DE', onClick: () => null },
                  { text: 'FR', onClick: () => null },
                  { text: 'IT', onClick: () => null },
                  { text: 'EN', onClick: () => null },
                ]}
              /> */}
            </Box>
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
        </Stack>
      </Box>
    </>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

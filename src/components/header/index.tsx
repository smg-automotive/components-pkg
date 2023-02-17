import React, { FC, PropsWithChildren, ReactNode } from 'react';

// eslint-disable-next-line import/no-internal-modules

import {
  DrawerBody,
  HStack,
  useMultiStyleConfig,
  useTheme,
} from '@chakra-ui/react';

import Stack from '../stack';
import Menu from '../menu';

// TODO: update the hook
import { ChevronDownSmallIcon } from '../icons';
import useMediaQuery from '../hooks/useMediaQuery';
// TODO: make dynamic
import Grid from '../grid';
import DrawerOverlay from '../drawer/DrawerOverlay';
import DrawerContent from '../drawer/DrawerContent';
import Drawer from '../drawer';
import Box from '../box';
import Avatar from '../avatar';
import logoMS from '../../assets/images/logo_ms24.svg';
import logoAS from '../../assets/images/logo_as24.svg';
import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import {
  useNavigationDrawer,
  Drawer as useNavigationDrawerType,
} from './hooks/useNavigationDrawer';
import { getHeaderLinks } from './config/headerLinks';
import {
  DawerNodeItems,
  DrawerNode,
  getDrawerNodeItems,
} from './config/drawerNodeItems';
import CollapsibleSection from './CollapsibleSection';

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

interface NavigationDrawerProps {
  drawer: useNavigationDrawerType;
  isOpen: boolean;
  onClose: () => void;
  menuHeight: string;
}

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  drawer,
  isOpen,
  onClose,
  menuHeight,
}) => {
  // TODO: handle this propers
  const isLargerThan1024 = useMediaQuery({ above: 'md' });
  const accordionsEnabled = !isLargerThan1024;

  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent marginTop={menuHeight}>
        <DrawerBody py={{ md: '2xl' }} px={{ md: '2xl' }}>
          <Grid
            height="full"
            templateColumns={{ '2xs': '1fr', md: 'repeat(6, 1fr)' }}
            maxWidth="container.xl"
            gridGap={{ md: '5xl' }}
          >
            {drawer?.nodes.map((node, index) => (
              <CollapsibleSection
                key={`node-${index}`}
                node={node}
                accordionsEnabled={accordionsEnabled}
              />
            ))}
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

interface NavigationItemsProps {
  plattform: Plattform;
  headerLinks: NavigationLinkProps[];
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

const NavigationItems: FC<NavigationItemsProps> = ({
  plattform,
  headerLinks,
  createDrawerHandler,
}) => {
  const linkStyles = useMultiStyleConfig('Link', { variant: 'navigationLink' });
  const logo = plattform === 'as24' ? logoAS : logoMS;
  return (
    <Stack direction="row" spacing="2xl" align="center">
      <img width="144px" height="34px" src={logo} />
      {/* TODO: replace logo quality */}
      {/* extract navigation links to separate component */}
      <Box
        onClick={createDrawerHandler({
          nodeName: 'search',
        })}
        __css={linkStyles.link}
        fontWeight="bold"
      >
        Suche <ChevronDownSmallIcon />
      </Box>
      <DesktopOnly>
        {headerLinks.map((link, index) => (
          <NavigationLink key={`link-${index}`} {...link} fontWeight="bold" />
        ))}
      </DesktopOnly>
    </Stack>
  );
};

interface NavigationAvatarProps {
  user: User;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

const NavigationAvatar: FC<NavigationAvatarProps> = ({
  user,
  createDrawerHandler,
}) => {
  if (user) {
    return (
      <HStack
        spacing="xxs"
        onClick={createDrawerHandler({
          nodeName: 'user',
        })}
      >
        <Avatar />
        <Box fontWeight="bold">{user.name}</Box>
      </HStack>
    );
  }

  return (
    <HStack spacing="1rem">
      <Avatar />
      <span>Login</span>
    </HStack>
  );
};

const NavigationLanguageMenu = () => {
  return (
    <Box
      as={Menu}
      title="DE"
      fontWeight="bold"
      items={[
        { text: 'Deutsch', onClick: () => null },
        { text: 'Français', onClick: () => null },
        { text: 'Italiano', onClick: () => null },
        { text: 'English', onClick: () => null },
      ]}
    ></Box>
  );
};

const Navigation: FC<NavigationProps> = ({ user }) => {
  const { name } = useTheme();
  const plattform: Plattform = name === 'AutoScout 24' ? 'as24' : 'ms24';
  const linkConfig = {
    userType: user.type,
    plattform,
  };

  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: 'en',
    user,
    menuHeight: '60px',
    dawerNodeItems: getDrawerNodeItems(linkConfig),
    headerLinks: getHeaderLinks(linkConfig),
  };

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    dawerNodeItems: config.dawerNodeItems,
  });

  return (
    <>
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        position="absolute"
        fontFamily="Make It Sans" // TODO Figure out how to handle this
      >
        <Box
          maxWidth="container.xl"
          height={config.menuHeight}
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          px="2rem"
          backgroundColor="white"
        >
          <NavigationItems
            plattform={plattform}
            headerLinks={config.headerLinks}
            createDrawerHandler={createDrawerHandler}
          />
          <Stack direction="row" spacing="2xl" align="center">
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
            />
            <NavigationLanguageMenu />
          </Stack>
        </Box>
        <NavigationDrawer
          drawer={drawer}
          isOpen={isOpen}
          onClose={onClose}
          menuHeight={config.menuHeight}
        />
      </Box>
    </>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

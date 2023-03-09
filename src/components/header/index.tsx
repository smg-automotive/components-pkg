import React, { FC, PropsWithChildren, useMemo } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import TranslationProvider from '../translationProvider';
import Stack from '../stack';

import Box from '../box';

import { NavigationLinkProps } from './NavigationLink';
import { NavigationLanguageMenu } from './NavigationLanguageMenu';
import { NavigationItems } from './NavigationItems';
import { NavigationAvatar } from './NavigationAvatar';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { NavigationDrawer } from './drawer';
import { getHeaderLinks } from './config/headerLinks';
import { DrawerNodeItems, getDrawerNodeItems } from './config/drawerNodeItems';
import { domains } from './config/domains';

interface NavigationConfiguration {
  homeUrl: string;
  currentLanguage: Language;
  menuHeight: string;
  user: User | null;
  drawerNodeItems: DrawerNodeItems;
  headerLinks: NavigationLinkProps[];
}

export interface User {
  id: number;
  name: string;
  type: 'private' | 'professional';
  accountId: number;
}

export type UserType = 'private' | 'professional';
export type Plattform = 'as24' | 'ms24';

interface NavigationProps {
  environment: Environment;
  plattform: Brand;
  language: Language;
  user: User | null;
  hasNotification: boolean;
  domain?: string;
  useAbsoluteUrls?: boolean;
}

export interface LinkConfig {
  userType: UserType | null;
  plattform: Plattform;
  useAbsoluteUrls: boolean;
  domain: string;
  urlPathParams: Record<string, string | number> | null;
}

const Navigation: FC<NavigationProps> = ({
  environment,
  plattform,
  language,
  user,
  hasNotification,
  useAbsoluteUrls = false,
}) => {
  const linkConfig: LinkConfig = {
    userType: user && user.type,
    plattform,
    useAbsoluteUrls,
    domain: domains[plattform][environment],
    urlPathParams: user && { accountId: user.accountId },
  };

  const config: NavigationConfiguration = useMemo(
    () => ({
      homeUrl: '/',
      currentLanguage: language,
      user,
      menuHeight: '60px',
      drawerNodeItems: getDrawerNodeItems(linkConfig),
      headerLinks: getHeaderLinks(linkConfig),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      user?.id,
      user?.type,
      user?.accountId,
      plattform,
      useAbsoluteUrls,
      environment,
      language,
    ]
  );

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerNodeItems,
  });

  return (
    <TranslationProvider language={config.currentLanguage} scopes={['header']}>
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        position="absolute"
        backgroundColor="white"
      >
        <Box
          maxWidth="container.xl"
          height={config.menuHeight}
          alignItems="center"
          margin={{ xl: 'auto' }}
          display="flex"
          justifyContent="space-between"
          px={{ base: 'sm', xs: 'lg' }}
        >
          <NavigationItems
            plattform={plattform}
            headerLinks={config.headerLinks}
            drawer={drawer}
            isOpen={isOpen}
            createDrawerHandler={createDrawerHandler}
          />
          <Stack direction="row" spacing="2xl" align="center">
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
              isOpen={isOpen}
              drawer={drawer}
              hasNotification={hasNotification}
            />
            <NavigationLanguageMenu activeLanguage={config.currentLanguage} />
          </Stack>
        </Box>
        <NavigationDrawer
          drawer={drawer}
          isOpen={isOpen}
          onClose={onClose}
          menuHeight={config.menuHeight}
        />
      </Box>
    </TranslationProvider>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

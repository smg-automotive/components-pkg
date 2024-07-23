import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import { MergedUser } from '@smg-automotive/auth';

import { CustomEvent } from 'src/types/tracking';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import TranslationProvider from 'src/components/translationProvider';
import Stack from 'src/components/stack';
import Box from 'src/components/box';

import { NavigationLanguageMenu } from './NavigationLanguageMenu';
import { NavigationItems } from './NavigationItems';
import { NavigationAvatar } from './NavigationAvatar';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { NavigationDrawer } from './drawer';
import { HeaderNavigationConfig } from './config/HeaderNavigationConfig';
import { headerLinks } from './config/headerLinks';
import { drawerNodeItems } from './config/DrawerNodeItems';

interface NavigationProps {
  environment: Environment;
  brand: Brand;
  comparisonItems?: number[] | null;
  language: Language;
  user: MergedUser | null;
  hasNotification: boolean;
  useAbsoluteUrls?: boolean;
  entitlements?: string[];
  onLogin: () => void;
  onLogout: () => void;
  trackEvent?: (event: CustomEvent) => void;
}

const Navigation: FC<NavigationProps> = ({
  environment,
  brand,
  comparisonItems,
  language,
  user,
  hasNotification,
  useAbsoluteUrls = false,
  entitlements = [],
  onLogin,
  onLogout,
  trackEvent,
}) => {
  const config = useMemo(() => {
    const urlPathParams = user?.sellerId
      ? { accountId: user?.sellerId }
      : undefined;
    const headerNavigationConfigInstance = new HeaderNavigationConfig({
      brand,
      environment,
      useAbsoluteUrls,
      config: {
        headerItems: headerLinks({ trackEvent }),
        drawerItems: drawerNodeItems({ trackEvent, onLogout, comparisonItems }),
      },
      user,
      urlPathParams,
      entitlements,
    });
    return headerNavigationConfigInstance.getMappedConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    brand,
    environment,
    useAbsoluteUrls,
    headerLinks,
    drawerNodeItems,
    user?.id,
    user?.userType,
    entitlements,
  ]);

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerItems,
  });

  // We can't pass `onClose` to logout callback when instancing the config
  // because config is needed to call `useNavigationDrawer` hook
  // which returns `onClose` callback
  // that's why we need to call onClose like this
  useEffect(() => {
    if (!user?.id) {
      onClose();
    }
  }, [user?.id, onClose]);

  return (
    <TranslationProvider language={language} scopes={['header']}>
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        position="relative"
        backgroundColor="white"
      >
        <Box
          maxWidth="container.2xl"
          height={config.menuHeight}
          alignItems="center"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          px={{ base: 'sm', xs: 'lg', sm: '2xl' }}
        >
          <NavigationItems
            platform={brand}
            headerLinks={config.headerItems}
            drawer={drawer}
            isOpen={isOpen}
            createDrawerHandler={createDrawerHandler}
            language={language}
          />
          <Stack direction="row" spacing="2xl" align="center">
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
              isOpen={isOpen}
              drawer={drawer}
              hasNotification={hasNotification}
              onLogin={onLogin}
            />
            <NavigationLanguageMenu activeLanguage={language} />
          </Stack>
        </Box>
      </Box>
      <NavigationDrawer
        user={user}
        drawer={drawer}
        isOpen={isOpen}
        onClose={onClose}
        menuHeight={config.menuHeight}
      />
    </TranslationProvider>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

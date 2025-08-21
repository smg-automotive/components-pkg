import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { CustomEvent } from 'src/types/tracking';
import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import TranslationProvider from 'src/components/translationProvider';
import Stack from 'src/components/stack';

import Box from 'src/components/box';

import NavigationTenantMenu from './navigationTenantMenu';
import { NavigationLanguageMenu } from './NavigationLanguageMenu';
import { NavigationItems } from './NavigationItems';
import { NavigationAvatar } from './NavigationAvatar';
import MobileHeaderMenuToggle from './MobileMenuToggle';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import FavoritesItem from './FavoritesItem';
import { NavigationDrawer } from './drawer';
import { iconItems } from './config/iconItems';
import { HeaderNavigationConfig } from './config/HeaderNavigationConfig';
import { headerLinks } from './config/headerLinks';
import { drawerNodeItems } from './config/DrawerNodeItems';
import ComparisonItem from './ComparisonItem';

export interface NavigationProps {
  brand: Brand;
  comparisonItemIds?: number[] | null;
  entitlements?: string[];
  environment: Environment;
  experiments?: Record<string, string>;
  hasNotification: boolean;
  language: Language;
  onLogin: () => void;
  onLogout: () => void;
  trackEvent?: (event: CustomEvent) => void;
  useAbsoluteUrls?: boolean;
  project?: Project;
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
  showTenantSelection?: boolean;
}

const Navigation: FC<NavigationProps> = ({
  brand,
  comparisonItemIds,
  environment,
  hasNotification,
  language,
  onLogin,
  onLogout,
  trackEvent,
  useAbsoluteUrls = false,
  project,
  user,
  selectTenant,
  showTenantSelection = true,
}) => {
  const config = useMemo(() => {
    const urlPathParams = user?.sellerId
      ? { accountId: user?.sellerId }
      : undefined;
    const headerNavigationConfigInstance = new HeaderNavigationConfig({
      brand,
      environment,
      useAbsoluteUrls,
      project,
      config: {
        headerItems: headerLinks({ trackEvent }),
        drawerItems: drawerNodeItems({
          trackEvent,
          onLogout,
          comparisonItemIds,
          sellerId: user?.sellerId,
          currentLanguage: language,
          isLoggedIn: !!user,
        }),
        iconItems: iconItems({
          trackEvent,
          comparisonItemIds,
        }),
      },
      user,
      urlPathParams,
    });
    return headerNavigationConfigInstance.getMappedConfig();
  }, [
    user,
    brand,
    environment,
    useAbsoluteUrls,
    project,
    trackEvent,
    onLogout,
    comparisonItemIds,
    language,
  ]);

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerItems,
  });

  // We can't pass `onClose` to logout callback when instancing the config
  // because config is needed to call `useNavigationDrawer` hook
  // which returns `onClose` callback
  // that's why we need to call onClose like this
  useEffect(() => {
    if (!user?.userId) {
      onClose();
    }
  }, [user?.userId, onClose]);

  return (
    <TranslationProvider
      language={language}
      scopes={['header', 'auth.tenantSelection']}
    >
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        backgroundColor="white"
        {...(isOpen ? { position: 'fixed', top: 0 } : { position: 'relative' })}
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
            {config.iconItems.favorites?.isVisible ? (
              <FavoritesItem link={config.iconItems.favorites} />
            ) : null}
            {config.iconItems.comparison ? (
              <ComparisonItem
                link={config.iconItems.comparison}
                count={comparisonItemIds?.length ?? 0}
              />
            ) : null}
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
              isOpen={isOpen}
              drawer={drawer}
              hasNotification={hasNotification}
              onLogin={onLogin}
            />
            {showTenantSelection ? (
              <NavigationTenantMenu user={user} selectTenant={selectTenant} />
            ) : null}
            <NavigationLanguageMenu activeLanguage={language} />
            <MobileHeaderMenuToggle
              isOpen={isOpen}
              createDrawerHandler={createDrawerHandler}
            />
          </Stack>
        </Box>
      </Box>
      <NavigationDrawer
        user={user}
        showTenantSelection={showTenantSelection}
        drawer={drawer}
        isOpen={isOpen}
        onClose={onClose}
        menuHeight={config.menuHeight}
        onLogin={onLogin}
        onLogout={onLogout}
        selectTenant={selectTenant}
      />
    </TranslationProvider>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };

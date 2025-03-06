import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import { ManagedSeller, MergedUser } from '@smg-automotive/auth';

import { CustomEvent } from 'src/types/tracking';
import { Project } from 'src/types/project';
import { Environment } from 'src/types/environment';
import { Brand } from 'src/types/brand';

import TranslationProvider from 'src/components/translationProvider';
import Stack from 'src/components/stack';

import Divider from 'src/components/divider';
import Box from 'src/components/box';

import NavigationTenantMenu from './NavigationTenantMenu';
import { NavigationLanguageMenu } from './NavigationLanguageMenu';
import { NavigationItems } from './NavigationItems';
import { NavigationAvatar } from './NavigationAvatar';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { NavigationDrawer } from './drawer';
import { iconItems } from './config/iconItems';
import { HeaderNavigationConfig } from './config/HeaderNavigationConfig';
import { headerLinks } from './config/headerLinks';
import { drawerNodeItems } from './config/DrawerNodeItems';
import ComparisonItem from './ComparisonItem';

interface NavigationProps {
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
  user: MergedUser | null;
  selectedTenant: ManagedSeller | null;
  availableTenants: ManagedSeller[] | null;
  selectTenant: (sellerId: number | string) => void;
}

const Navigation: FC<NavigationProps> = ({
  brand,
  comparisonItemIds,
  entitlements = [],
  environment,
  experiments = {},
  hasNotification,
  language,
  onLogin,
  onLogout,
  trackEvent,
  useAbsoluteUrls = false,
  project,
  user,
  selectedTenant,
  availableTenants,
  selectTenant,
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
        headerItems: headerLinks({ trackEvent, experiments }),
        drawerItems: drawerNodeItems({
          trackEvent,
          onLogout,
          comparisonItemIds,
          sellerId: user?.sellerId,
        }),
        iconItems: iconItems({ trackEvent, comparisonItemIds }),
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
    project,
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
    <TranslationProvider
      language={language}
      scopes={['header', 'auth.tenantSelection']}
    >
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
            {config.iconItems.comparison ? (
              <ComparisonItem
                link={config.iconItems.comparison}
                count={comparisonItemIds?.length ?? 0}
              />
            ) : null}
            {Object.values(config.iconItems).some((link) => !!link) ? (
              <Divider orientation="vertical" height="sm" />
            ) : null}
            <NavigationLanguageMenu activeLanguage={language} />
            <NavigationTenantMenu
              selectedTenant={selectedTenant}
              availableTenants={availableTenants}
              selectTenant={selectTenant}
            />
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
              isOpen={isOpen}
              drawer={drawer}
              hasNotification={hasNotification}
              onLogin={onLogin}
            />
          </Stack>
        </Box>
      </Box>
      <NavigationDrawer
        user={user}
        selectedTenant={selectedTenant}
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

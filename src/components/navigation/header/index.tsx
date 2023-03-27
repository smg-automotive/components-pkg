import React, { FC, PropsWithChildren, useMemo } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

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
import { drawerNodeItems } from './config/drawerNodeItems';

export type UserType = 'private' | 'professional';
export type Platform = 'autoscout24' | 'motoscout24';

export interface User {
  id: number;
  name: string;
  type: UserType;
  accountId: number;
}
interface NavigationProps {
  environment: Environment;
  brand: Brand;
  language: Language;
  user: User | null;
  hasNotification: boolean;
  useAbsoluteUrls?: boolean;
}

const Navigation: FC<NavigationProps> = ({
  environment,
  brand,
  language,
  user,
  hasNotification,
  useAbsoluteUrls = false,
}) => {
  const config = useMemo(() => {
    const headerNavigationConfigInstance = new HeaderNavigationConfig({
      brand,
      environment,
      useAbsoluteUrls,
      config: {
        headerItems: headerLinks,
        drawerItems: drawerNodeItems,
      },
      user,
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
    user?.type,
  ]);

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerItems,
  });

  return (
    <TranslationProvider language={language} scopes={['header']}>
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
            platform={brand}
            headerLinks={config.headerItems}
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
            <NavigationLanguageMenu activeLanguage={language} />
          </Stack>
        </Box>
      </Box>
      <NavigationDrawer
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

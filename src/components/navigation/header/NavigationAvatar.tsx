import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { MergedUser } from '@smg-automotive/auth';
import { HStack, useMultiStyleConfig } from '@chakra-ui/react';

import Hide from 'src/components/hide';
import Box from 'src/components/box';
import Avatar from 'src/components/avatar';

import { Drawer } from './hooks/useNavigationDrawer';
import { DrawerIndicator } from './drawer/DrawerIndicator';
import { DrawerNode } from './config/DrawerNodeItems';

interface NavigationAvatarProps {
  user: MergedUser | null;
  isOpen: boolean;
  drawer: Drawer;
  hasNotification: boolean;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
  onLogin: () => void;
}

export const NavigationAvatar: FC<NavigationAvatarProps> = ({
  user,
  isOpen,
  drawer,
  hasNotification,
  createDrawerHandler,
  onLogin,
}) => {
  const isDrawerOpened = isOpen && drawer?.current === DrawerNode.User;
  const linkStyles = useMultiStyleConfig('Link', { variant: 'navigationLink' });
  const { t } = useI18n();

  if (user) {
    return (
      <HStack
        spacing="xs"
        cursor="pointer"
        _hover={{ color: 'blue.700' }}
        color="gray.900"
        onClick={createDrawerHandler({
          nodeName: DrawerNode.User,
        })}
      >
        <Avatar withNotification={hasNotification} />
        <Hide below="sm">
          <Box fontWeight="bold" {...(isDrawerOpened && { color: 'blue.700' })}>
            {user.email}
          </Box>
        </Hide>
        <DrawerIndicator isOpen={isDrawerOpened} />
      </HStack>
    );
  }

  return (
    <HStack
      onClick={onLogin}
      __css={linkStyles.link}
      fontWeight="bold"
      position="relative"
      top="1px"
    >
      <Hide below="sm" marginRight="xs">
        {t('header.login')}
      </Hide>
      <Box as={Avatar} marginLeft="2px" />
    </HStack>
  );
};

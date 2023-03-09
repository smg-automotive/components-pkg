import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { Box, HStack } from '@chakra-ui/react';

import Avatar from 'src/components/avatar';

import Hide from '../hide';
import { Drawer } from './hooks/useNavigationDrawer';
import { DrawerIndicator } from './drawer/DrawerIndicator';
import { DrawerNode } from './config/drawerNodeItems';

import { User } from './index';

interface NavigationAvatarProps {
  user: User | null;
  isOpen: boolean;
  drawer: Drawer;
  hasNotification: boolean;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

export const NavigationAvatar: FC<NavigationAvatarProps> = ({
  user,
  isOpen,
  drawer,
  hasNotification,
  createDrawerHandler,
}) => {
  const { t } = useI18n();
  const isDrawerOpened = isOpen && drawer?.current === DrawerNode.User;
  if (user) {
    return (
      <HStack
        spacing="xs"
        cursor="pointer"
        _hover={{ color: 'blue.700' }}
        onClick={createDrawerHandler({
          nodeName: DrawerNode.User,
        })}
      >
        <Avatar withNotification={hasNotification} />
        <Hide below="sm">
          <Box fontWeight="bold" {...(isDrawerOpened && { color: 'blue.700' })}>
            {user.name}
          </Box>
        </Hide>
        <DrawerIndicator isOpen={isDrawerOpened} />
      </HStack>
    );
  }

  return (
    <HStack spacing="xs" cursor="pointer" _hover={{ color: 'blue.700' }}>
      <Avatar />
      <Box fontWeight="bold">{t('header.login')}</Box>
    </HStack>
  );
};

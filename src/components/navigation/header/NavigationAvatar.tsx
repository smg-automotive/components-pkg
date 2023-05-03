import React, { FC } from 'react';
import { HStack } from '@chakra-ui/react';

import Hide from 'src/components/hide';
import Box from 'src/components/box';
import Avatar from 'src/components/avatar';

import NavigationLink from './links/NavigationLink';
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
            {user.name}
          </Box>
        </Hide>
        <DrawerIndicator isOpen={isDrawerOpened} />
      </HStack>
    );
  }

  return (
    <HStack
      spacing="xs"
      cursor="pointer"
      _hover={{ color: 'blue.700' }}
      color="gray.900"
      fontWeight="bold"
    >
      <NavigationLink
        translationKey="header.login"
        fontWeight="bold"
        leftIcon={<Avatar />}
        hideTextBelow="sm"
        onClick={onLogin}
      />
    </HStack>
  );
};

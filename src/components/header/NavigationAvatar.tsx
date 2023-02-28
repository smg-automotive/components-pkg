import React, { FC } from 'react';
import { Box, HStack } from '@chakra-ui/react';

import Avatar from 'src/components/avatar';

import { DrawerNode } from './config/drawerNodeItems';

import { User } from './index';

interface NavigationAvatarProps {
  user: User;
  createDrawerHandler: ({ nodeName }: { nodeName: DrawerNode }) => () => void;
}

export const NavigationAvatar: FC<NavigationAvatarProps> = ({
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

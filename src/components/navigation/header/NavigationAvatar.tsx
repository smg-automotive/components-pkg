import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { HStack, useMultiStyleConfig } from '@chakra-ui/react';

import Text from 'src/components/text';
import Hide from 'src/components/hide';
import Box from 'src/components/box';
import Avatar from 'src/components/avatar';

import { Drawer } from './hooks/useNavigationDrawer';
import { DrawerIndicator } from './drawer/DrawerIndicator';
import { DrawerNode } from './config/DrawerNodeItems';

interface NavigationAvatarProps {
  user: EnrichedSessionUser | null;
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
      <Hide below="sm">
        <HStack
          spacing="xs"
          cursor="pointer"
          _hover={{ color: 'blue.700' }}
          color={isDrawerOpened ? 'blue.700' : 'gray.900'}
          onClick={createDrawerHandler({
            nodeName: DrawerNode.User,
          })}
        >
          <Avatar withNotification={hasNotification} />
          <Hide below="md">
            <Text fontWeight="bold" noOfLines={1} maxW="2xl" title={user.email}>
              {user.email}
            </Text>
          </Hide>
          <DrawerIndicator isOpen={isDrawerOpened} />
        </HStack>
      </Hide>
    );
  }

  return (
    <Hide below="sm">
      <HStack
        onClick={onLogin}
        __css={linkStyles.link}
        fontWeight="bold"
        position="relative"
        top="1px"
      >
        <Box as={Avatar} marginLeft="2px" />
        <Hide below="md" marginRight="xs">
          {t('header.login')}
        </Hide>
      </HStack>
    </Hide>
  );
};

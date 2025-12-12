import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { useSlotRecipe } from '@chakra-ui/react';

import { Text } from 'src/components/text';
import { Box } from 'src/components/box';
import { Avatar } from 'src/components/avatar';

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
  const recipe = useSlotRecipe({ key: 'link' });
  const styles = recipe({ variant: 'navigationLink' });
  const { t } = useI18n();

  if (user) {
    return (
      <Box hideBelow="sm">
        <Box
          display="flex"
          flexDirection="row"
          gap="xs"
          cursor="pointer"
          _hover={{ color: 'blue.700' }}
          color={isDrawerOpened ? 'blue.700' : 'gray.900'}
          onClick={createDrawerHandler({
            nodeName: DrawerNode.User,
          })}
          alignItems="center"
        >
          <Avatar withNotification={hasNotification} />
          <Box hideBelow="md">
            <Text fontWeight="bold" lineClamp={1} maxW="2xl" title={user.email}>
              {user.email}
            </Text>
          </Box>
          <DrawerIndicator isOpen={isDrawerOpened} />
        </Box>
      </Box>
    );
  }

  return (
    <Box hideBelow="sm">
      <Box
        display="flex"
        flexDirection="row"
        onClick={onLogin}
        css={{
          ...styles.root,
        }}
        fontWeight="bold"
        position="relative"
        cursor="pointer"
        alignItems="center"
        gap="sm"
        color="gray.900"
      >
        <Box as={Avatar} css={{ marginLeft: '2px' }} />
        <Box hideBelow="md" marginRight="xs">
          {t('header.login')}
        </Box>
      </Box>
    </Box>
  );
};

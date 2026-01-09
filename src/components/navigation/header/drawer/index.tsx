import React, { FC } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { Portal } from '@chakra-ui/react';

import { Grid } from 'src/components/grid';
import { Box } from 'src/components/box';

import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import { DrawerNode } from '../config/DrawerNodeItems';
import { DrawerUserInfo } from './userInfo';
import { DrawerMenu } from './DrawerMenu';
import { DrawerLoginToggle } from './DrawerLoginToggle';

interface NavigationDrawerProps {
  user: EnrichedSessionUser | null;
  drawer: useNavigationDrawerType;
  isOpen: boolean;
  onClose: () => void;
  menuHeight: string;
  onLogin: () => void;
  onLogout: () => void;
  selectTenant: (sellerId: number | string) => Promise<void>;
  showTenantSelection: boolean;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  drawer,
  isOpen,
  onClose,
  menuHeight,
  user,
  onLogin,
  onLogout,
  selectTenant,
  showTenantSelection,
}) => {
  return (
    <Portal>
      {/* Transparent Backdrop */}
      <Box
        position="fixed"
        inset="0"
        zIndex="overlay"
        onClick={onClose}
        css={{
          top: menuHeight,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />
      {/* Drawer Content */}
      <Box
        position="fixed"
        left="0"
        right="0"
        zIndex="modal"
        css={{
          top: menuHeight,
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isOpen ? 1 : 0,
          transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <Box
          overflowY="scroll"
          bg="white"
          boxShadow="xs"
          borderBottom="1px"
          borderBottomColor="gray.200"
          css={{
            maxHeight: `calc(100vh - ${menuHeight})`,
            maxWidth: '100vw',
            width: '100%',
          }}
        >
          <Box
            py="lg"
            px={{ md: 'xs' }}
            maxWidth="container.2xl"
            width="full"
            margin="auto"
          >
            {isOpen ? (
              <Grid
                data-testid="drawer-body"
                height="full"
                width="full"
                templateColumns={{
                  '2xs': 'minmax(0, 1fr)',
                  md: 'repeat(5, 1fr)',
                }}
                gap={{ md: '3xl' }}
              >
                {[DrawerNode.User, DrawerNode.Combined].includes(
                  drawer?.current as DrawerNode,
                ) ? (
                  <DrawerUserInfo
                    user={user}
                    selectTenant={selectTenant}
                    showTenantSelection={showTenantSelection}
                  />
                ) : null}
                {drawer?.nodes.map((node, index) => (
                  <DrawerMenu key={`node-${index}`} node={node} />
                ))}
                {drawer?.current === DrawerNode.Combined ? (
                  <DrawerLoginToggle
                    user={user}
                    onLogin={onLogin}
                    onLogout={onLogout}
                  />
                ) : null}
              </Grid>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Portal>
  );
};

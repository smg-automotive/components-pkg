import React, { FC } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { Drawer, Portal } from '@chakra-ui/react';

import { Grid } from 'src/components/grid';

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
    <Drawer.Root
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner
          css={{
            position: 'fixed',
            top: menuHeight,
            left: 0,
            right: 0,
            bottom: 'auto',
            width: '100%',
            zIndex: 'modal',
          }}
        >
          <Drawer.Content
            overflowY="scroll"
            bg="white"
            css={{
              maxHeight: `calc(100vh - ${menuHeight})`,
              maxWidth: '100vw',
              width: '100%',
              borderRadius: 0,
            }}
          >
            <Drawer.Body
              data-testid="drawer-body"
              py="lg"
              px={{ md: 'xs' }}
              maxWidth="container.2xl"
              width="full"
              margin="auto"
            >
              <Grid
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
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

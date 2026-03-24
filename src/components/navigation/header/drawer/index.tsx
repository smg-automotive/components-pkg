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
      placement="top"
      onOpenChange={({ open }) => {
        if (!open) onClose();
      }}
    >
      <Portal>
        <Drawer.Backdrop
          css={{
            top: menuHeight,
          }}
        />
        <Drawer.Positioner
          css={{
            top: menuHeight,
            height: `calc(100dvh - ${menuHeight})`,
            alignItems: 'flex-start',
          }}
        >
          <Drawer.Content
            bg="white"
            boxShadow="xs"
            borderBottom="1px"
            borderBottomColor="gray.200"
            borderRadius="0"
            maxH={`calc(100vh - ${menuHeight})`}
            maxW="100vw"
            width="100%"
            height="auto"
          >
            <Drawer.Body
              data-testid="drawer-body"
              overflowY="auto"
              py="lg"
              px={{ md: 'xs' }}
              maxWidth="container.2xl"
              width="full"
              margin="auto"
              paddingY="lg"
              paddingX={0}
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

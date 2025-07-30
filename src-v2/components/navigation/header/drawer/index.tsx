import React, { FC } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { DrawerBody } from '@chakra-ui/react';

import Grid from 'src/components/grid';

import DrawerOverlay from 'src/components/drawer/DrawerOverlay';
import DrawerContent from 'src/components/drawer/DrawerContent';
import Drawer from 'src/components/drawer';

import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import { DrawerNode } from '../config/DrawerNodeItems';
import DrawerUserInfo from './userInfo';
import { DrawerMenu } from './DrawerMenu';
import DrawerLoginToggle from './DrawerLoginToggle';

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
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        overflowY="scroll"
        maxH={`calc(100vh - ${menuHeight})`}
        maxW="100vw"
        // This is due to safari scrolling the page up when an input is focused
        // Using margin results in a gap between the header and the drawer after the scroll
        // Chakra overrides the `top` position with the inline style, hence the !important
        top={`${menuHeight} !important`}
      >
        <DrawerBody
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
            gridGap={{ md: '3xl' }}
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

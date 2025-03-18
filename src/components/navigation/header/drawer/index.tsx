import React, { FC } from 'react';
import { EnrichedSessionUser } from '@smg-automotive/auth';
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
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent marginTop={menuHeight} overflow="scroll" maxH="100%">
        <DrawerBody
          data-testid="drawer-body"
          py="lg"
          px={{ md: 'xs' }}
          maxWidth="container.2xl"
          width="full"
          margin={'auto'}
        >
          <Grid
            height="full"
            templateColumns={{ '2xs': '1fr', md: 'repeat(5, 1fr)' }}
            gridGap={{ md: '3xl' }}
          >
            {[DrawerNode.User, DrawerNode.Combined].includes(
              drawer?.current as DrawerNode,
            ) ? (
              <DrawerUserInfo user={user} selectTenant={selectTenant} />
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

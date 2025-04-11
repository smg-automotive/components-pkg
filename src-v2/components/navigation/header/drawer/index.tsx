import React, { FC } from 'react';
import { MergedUser } from '@smg-automotive/auth';
import { DrawerBody } from '@chakra-ui/react';

import Grid from 'src/components/grid';

import DrawerOverlay from 'src/components/drawer/DrawerOverlay';
import DrawerContent from 'src/components/drawer/DrawerContent';
import Drawer from 'src/components/drawer';

import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import { DrawerNode } from '../config/DrawerNodeItems';
import DrawerUserInfo from './UserInfo';
import { DrawerMenu } from './DrawerMenu';
import DrawerLoginToggle from './DrawerLoginToggle';

interface NavigationDrawerProps {
  user: MergedUser | null;
  drawer: useNavigationDrawerType;
  isOpen: boolean;
  onClose: () => void;
  menuHeight: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  drawer,
  isOpen,
  onClose,
  menuHeight,
  user,
  onLogin,
  onLogout,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        marginTop={menuHeight}
        overflowY="scroll"
        maxH={`calc(100vh - ${menuHeight})`}
        maxW="100vw"
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
              <DrawerUserInfo user={user} />
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

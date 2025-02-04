import React, { FC } from 'react';
import { MergedUser } from '@smg-automotive/auth';
import { DrawerBody } from '@chakra-ui/react';

import Grid from 'src/components/grid';

import DrawerOverlay from 'src/components/drawer/DrawerOverlay';
import DrawerContent from 'src/components/drawer/DrawerContent';
import Drawer from 'src/components/drawer';

import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import DrawerUserInfo from './UserInfo';
import { DrawerMenu } from './DrawerMenu';

interface NavigationDrawerProps {
  user: MergedUser | null;
  drawer: useNavigationDrawerType;
  isOpen: boolean;
  onClose: () => void;
  menuHeight: string;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  drawer,
  isOpen,
  onClose,
  menuHeight,
  user,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent marginTop={menuHeight}>
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
            <DrawerUserInfo user={user} />
            {drawer?.nodes.map((node, index) => (
              <DrawerMenu key={`node-${index}`} node={node} />
            ))}
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

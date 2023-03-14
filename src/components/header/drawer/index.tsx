import React, { FC } from 'react';

import { DrawerBody } from '@chakra-ui/react';

import Grid from 'src/components/grid';

import DrawerOverlay from 'src/components/drawer/DrawerOverlay';
import DrawerContent from 'src/components/drawer/DrawerContent';
import Drawer from 'src/components/drawer';

import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import { DrawerMenu } from './DrawerMenu';

interface NavigationDrawerProps {
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
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent marginTop={menuHeight}>
        <DrawerBody
          data-testid="drawer-body"
          py={{ md: '2xl' }}
          px={{ md: 'xs' }}
          maxWidth="container.xl"
          width="100%"
          margin={{ xl: 'auto' }}
        >
          <Grid
            height="full"
            templateColumns={{ '2xs': '1fr', md: 'repeat(5, 1fr)' }}
            gridGap={{ md: '3xl' }}
          >
            {drawer?.nodes.map((node, index) => (
              <DrawerMenu key={`node-${index}`} node={node} />
            ))}
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

import React, { FC } from 'react';

import { Box, DrawerBody } from '@chakra-ui/react';

import Show from 'src/components/show';
import ListItem from 'src/components/list/ListItem';
import Grid from 'src/components/grid';

import DrawerOverlay from 'src/components/drawer/DrawerOverlay';
import DrawerContent from 'src/components/drawer/DrawerContent';
import Drawer from 'src/components/drawer';

import NavigationLink, { NavigationLinkProps } from '../NavigationLink';
import { Drawer as useNavigationDrawerType } from '../hooks/useNavigationDrawer';
import { NavigationLinkNode } from '../config/drawerNodeItems';
import { CollapsibleSection, NonCollapsibleSection } from './DrawerSections';

export const DrawerNavigationLink: FC<{
  item: NavigationLinkProps;
}> = ({ item }) => {
  return (
    <Show below={item.showUnderMoreLinkBelow}>
      <Box as={ListItem} paddingBottom={{ base: 'lg', md: 'md' }}>
        <NavigationLink
          {...item}
          variant="subNavigationLink"
          color={item.color}
        />
      </Box>
    </Show>
  );
};

export const DrawerMenu: FC<{ node: NavigationLinkNode }> = ({ node }) => {
  if (!node.text) {
    return <NonCollapsibleSection node={node} />;
  }

  return <CollapsibleSection node={node} />;
};

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
          py={{ md: '2xl' }}
          maxWidth="container.xl"
          margin={{ xl: 'auto' }}
        >
          <Grid
            height="full"
            templateColumns={{ '2xs': '1fr', md: 'repeat(6, 1fr)' }}
            maxWidth="container.xl"
            gridGap={{ md: '5xl' }}
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

import React, { FC } from 'react';

import Show from 'src/components/show';
import ListItem from 'src/components/list/ListItem';
import Box from 'src/components/box';

import NavigationLink, { NavigationLinkProps } from '../NavigationLink';

export const DrawerNavigationLink: FC<{
  item: NavigationLinkProps;
}> = ({ item }) => {
  if (!item.isVisible) {
    return null;
  }

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

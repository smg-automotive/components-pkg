import React, { FC } from 'react';

import { List } from 'src/components/list';
import { Box } from 'src/components/box';

import { NavigationLink, NavigationLinkProps } from '../links/NavigationLink';

export const DrawerNavigationLink: FC<{
  item: NavigationLinkProps;
}> = ({ item }) => {
  // Only apply hideFrom if the breakpoint is defined
  // Items without showUnderMoreLinkBelow should always be visible
  const hideProps = item.showUnderMoreLinkBelow
    ? { hideFrom: item.showUnderMoreLinkBelow }
    : {};

  return (
    <Box {...hideProps}>
      <List.Item paddingBottom={{ base: 'lg', md: 'md' }}>
        <NavigationLink
          {...item}
          variant="subNavigationLink"
          color={item.color}
        />
      </List.Item>
    </Box>
  );
};

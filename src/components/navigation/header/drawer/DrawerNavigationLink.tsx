import React, { FC } from 'react';

import Show from '@/src/components/show';
import NavigationLink, {
  NavigationLinkProps,
} from '@/src/components/navigation/header/links/NavigationLink';
import ListItem from '@/src/components/list/ListItem';
import Box from '@/src/components/box';

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

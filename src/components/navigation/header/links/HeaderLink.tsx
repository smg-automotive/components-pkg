import React, { FC } from 'react';

import { HeaderNavigationLink } from '@/src/components/navigation/header/config/headerNavigationLink';
import { Box } from '@/src/components/box';

import { NavigationLink } from './NavigationLink';

export const HeaderLink: FC<{
  link: HeaderNavigationLink;
}> = ({ link }) => {
  return (
    <Box hideBelow={link.showUnderMoreLinkBelow}>
      <NavigationLink {...link} fontWeight="bold" />
    </Box>
  );
};

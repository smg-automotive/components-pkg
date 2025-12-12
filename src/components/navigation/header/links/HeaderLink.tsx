import React, { FC } from 'react';

import { Box } from 'src/components/box';

import { HeaderNavigationLink } from '../config/headerNavigationLink';
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

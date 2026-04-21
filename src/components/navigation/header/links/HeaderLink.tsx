import React, { FC } from 'react';

import { HeaderNavigationLink } from '@/src/components/navigation/header/config/headerNavigationLink';
import Hide from '@/src/components/hide';

import NavigationLink from './NavigationLink';

export const HeaderLink: FC<{
  link: HeaderNavigationLink;
}> = ({ link }) => {
  return (
    <Hide below={link.showUnderMoreLinkBelow}>
      <NavigationLink {...link} fontWeight="bold" />
    </Hide>
  );
};

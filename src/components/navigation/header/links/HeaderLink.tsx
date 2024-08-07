import React, { FC } from 'react';

import Hide from 'src/components/hide';

import { HeaderNavigationLink } from '../config/headerNavigationLink';
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

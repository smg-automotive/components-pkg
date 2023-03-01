import React, { FC, ReactNode } from 'react';

import { Badge } from '@chakra-ui/react';

import { BreakpointName } from 'src/themes/shared/breakpoints';

import Link from '../link';
import Hide from '../hide';

export const HeaderLink: FC<{
  link: NavigationLinkProps;
}> = ({ link }) => {
  return (
    <Hide below={link.showUnderMoreLinkBelow}>
      <NavigationLink {...link} fontWeight="bold" />
    </Hide>
  );
};

export interface NavigationLinkProps {
  url: string;
  text: string;
  isNew?: boolean;
  isVisible?: boolean;
  iconRight?: ReactNode;
  showUnderMoreLinkBelow?: BreakpointName;
  fontWeight?: 'regular' | 'bold';
  variant?: 'navigationLink' | 'subNavigationLink';
}

const NavigationLink: FC<NavigationLinkProps> = ({
  url,
  text,
  isNew,
  isVisible = true,
  fontWeight = 'regular',
  variant = 'navigationLink',
}) => {
  if (!isVisible) return null;

  return (
    <Link href={url} variant={variant} fontWeight={fontWeight}>
      {text}
      {isNew ? <Badge variant="navigationLinkBadge">New</Badge> : null}
    </Link>
  );
};

export default NavigationLink;

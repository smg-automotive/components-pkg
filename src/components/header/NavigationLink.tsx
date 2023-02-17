import React, { FC, ReactNode } from 'react';

import { Badge, useMultiStyleConfig } from '@chakra-ui/react';

import Link from '../link';

export interface NavigationLinkProps {
  url: string;
  text: string;
  isNew?: boolean;
  isVisible?: boolean;
  iconRight?: ReactNode;
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

import React, { FC, ReactNode } from 'react';

import { Badge } from '@chakra-ui/react';

import Link from '../link';

export interface NavigationLinkProps {
  url: string;
  text: string;
  isNew?: boolean;
  isVisible?: boolean;
  iconRight?: ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  url,
  text,
  isNew,
  isVisible = true,
}) => {
  if (!isVisible) return null;

  return (
    <Link href={url} variant="headerLink">
      {text}
      {isNew ? <Badge>New</Badge> : null}
    </Link>
  );
};

export default NavigationLink;

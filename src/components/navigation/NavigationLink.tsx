import React, { FC, ReactNode } from 'react';
import Link from '../link';
import { Badge } from '@chakra-ui/react';

export interface NavigationLinkProps {
  url: string
  text: string
  isNew?: boolean
  isVisible?: boolean
  iconRight?: ReactNode
}

const NavigationLink: FC<NavigationLinkProps> = ({
  url,
  text,
  isNew
}) => {
  return (
    <Link href={url}>{text}{isNew ? (<Badge>New</Badge>) : null}</Link>
  );
}

export default NavigationLink;

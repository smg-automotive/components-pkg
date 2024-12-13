import React, { FC } from 'react';
import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type LinkProps = ChakraLinkProps & {
  isExternal?: boolean;
};

export const Link: FC<LinkProps> = ({
  isExternal,
  target,
  rel,
  ...props
}: LinkProps) => {
  return (
    <ChakraLink
      target={target || (isExternal ? '_blank' : undefined)}
      rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      {...props}
    />
  );
};

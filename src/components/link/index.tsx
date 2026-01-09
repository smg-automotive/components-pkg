import React, { FC } from 'react';
import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
  RecipeVariantProps,
} from '@chakra-ui/react';

import { linkRecipe } from 'src/themes/shared/recipes/link';

export type LinkProps = ChakraLinkProps & {
  isExternal?: boolean;
} & RecipeVariantProps<typeof linkRecipe>;

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

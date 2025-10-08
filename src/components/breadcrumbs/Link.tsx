import React, { FC } from 'react';

import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  useSlotRecipe,
} from '@chakra-ui/react';

export const BreadcrumbLink: FC<ChakraBreadcrumbLinkProps> = ({
  children,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const { link } = recipe();
  const { href } = props;

  return href ? (
    <ChakraBreadcrumb.Link css={link} href={href} {...props}>
      {children}
    </ChakraBreadcrumb.Link>
  ) : (
    children
  );
};

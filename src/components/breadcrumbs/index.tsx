import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbRootProps as BreadcrumbProps,
  Breadcrumb as ChakraBreadcrumb,
  useSlotRecipe,
} from '@chakra-ui/react';

export const BreadcrumbsComponent: FC<PropsWithChildren<BreadcrumbProps>> = ({
  children,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const styles = recipe();

  return (
    <ChakraBreadcrumb.Root {...props}>
      <ChakraBreadcrumb.List css={styles.list}>
        {children}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  );
};

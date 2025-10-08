import React, { FC, PropsWithChildren } from 'react';

import {
  Breadcrumb as ChakraBreadcrumb,
  useSlotRecipe,
} from '@chakra-ui/react';

export const BreadcrumbItem: FC<PropsWithChildren> = ({ children }) => {
  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const styles = recipe();

  return (
    <ChakraBreadcrumb.Item css={styles.item}>{children}</ChakraBreadcrumb.Item>
  );
};

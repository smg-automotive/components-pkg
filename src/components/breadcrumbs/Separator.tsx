import React, { FC } from 'react';

import {
  Breadcrumb as ChakraBreadcrumb,
  useSlotRecipe,
} from '@chakra-ui/react';

import { ChevronRightTinyIcon } from '../icons';

export const BreadcrumbSeparator: FC = () => {
  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const styles = recipe();

  return (
    <ChakraBreadcrumb.Separator css={styles.separator}>
      <ChevronRightTinyIcon />
    </ChakraBreadcrumb.Separator>
  );
};

import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbItemProps as ChakraBreadcrumbItemProps,
  Hide,
} from '@chakra-ui/react';

const BreadcrumbItem: FC<PropsWithChildren<ChakraBreadcrumbItemProps>> = ({
  children,
  ...itemProps
}) => {
  return (
    <Hide below="sm">
      <ChakraBreadcrumbItem {...itemProps}>{children}</ChakraBreadcrumbItem>
    </Hide>
  );
};

export default BreadcrumbItem;

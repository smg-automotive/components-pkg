import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbItemProps as ChakraBreadcrumbItemProps,
} from '@chakra-ui/react';

const BreadcrumbItem: FC<PropsWithChildren<ChakraBreadcrumbItemProps>> = ({
  children,
  ...itemProps
}) => {
  return <ChakraBreadcrumbItem {...itemProps}>{children}</ChakraBreadcrumbItem>;
};

export default BreadcrumbItem;

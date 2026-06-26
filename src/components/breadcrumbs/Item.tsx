import React, { FC, PropsWithChildren } from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';

export const BreadcrumbsItem: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraBreadcrumb.Item>{children}</ChakraBreadcrumb.Item>;
};

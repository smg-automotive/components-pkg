import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbProps,
  Breadcrumb as ChakraBreadcrumb,
} from '@chakra-ui/react';

import { ChevronRight } from '../icons';

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbProps>> = ({
  children,
  ...props
}) => {
  return (
    <ChakraBreadcrumb
      separator={props.separator || <ChevronRight />}
      {...props}
    >
      {children}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumbs;

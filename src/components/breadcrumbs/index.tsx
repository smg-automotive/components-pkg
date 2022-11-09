import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbProps,
  Breadcrumb as ChakraBreadcrumb,
} from '@chakra-ui/react';

import { ChevronRightTinyIcon } from '../icons';

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbProps>> = ({
  children,
  ...props
}) => {
  return (
    <ChakraBreadcrumb
      separator={props.separator || <ChevronRightTinyIcon />}
      {...props}
    >
      {children}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumbs;

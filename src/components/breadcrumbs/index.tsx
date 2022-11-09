import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbProps,
  Breadcrumb as ChakraBreadcrumb,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { ChevronRightTinyIcon } from '../icons';

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbProps>> = ({
  children,
  ...props
}) => {
  const { container, separator } = useMultiStyleConfig('Breadcrumbs');

  return (
    <ChakraBreadcrumb
      __css={container}
      separator={props.separator || <ChevronRightTinyIcon __css={separator} />}
      {...props}
    >
      {children}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumbs;

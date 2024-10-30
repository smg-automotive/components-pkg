import React, { FC } from 'react';

import {
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

const BreadcrumbLink: FC<ChakraBreadcrumbLinkProps> = ({
  children,
  ...itemProps
}) => {
  const styles = useMultiStyleConfig('Breadcrumbs');
  const { href } = itemProps;

  return href ? (
    <ChakraBreadcrumbLink __css={styles.link} href={href} {...itemProps}>
      {children}
    </ChakraBreadcrumbLink>
  ) : (
    children
  );
};

export default BreadcrumbLink;

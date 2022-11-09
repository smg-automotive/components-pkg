import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface BreadcrumbLinkProps extends ChakraBreadcrumbLinkProps {
  href?: string;
}

const BreadcrumbLink: FC<PropsWithChildren<BreadcrumbLinkProps>> = ({
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
    <>{children}</>
  );
};

export default BreadcrumbLink;

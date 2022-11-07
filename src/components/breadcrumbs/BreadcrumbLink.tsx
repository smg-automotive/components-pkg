import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  Text,
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
    <Text color="gray.900">{children}</Text>
  );
};

export default BreadcrumbLink;

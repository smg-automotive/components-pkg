import React, { FC, PropsWithChildren } from 'react';

import {
  chakra,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface BreadcrumbLinkProps extends ChakraBreadcrumbLinkProps {
  isLast?: boolean;
}

const BreadcrumbLink: FC<PropsWithChildren<BreadcrumbLinkProps>> = ({
  children,
  ...itemProps
}) => {
  const styles = useMultiStyleConfig('Breadcrumbs');
  const { isLast } = itemProps;

  return isLast ? (
    <chakra.p __css={styles.text}>{children}</chakra.p>
  ) : (
    <ChakraBreadcrumbLink __css={styles.link} {...itemProps}>
      {children}
    </ChakraBreadcrumbLink>
  );
};

export default BreadcrumbLink;

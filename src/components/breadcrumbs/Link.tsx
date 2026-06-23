import React, { FC } from 'react';

import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  useSlotRecipe,
} from '@chakra-ui/react';

type BreadcrumbLinkProps = Omit<ChakraBreadcrumbLinkProps, 'href'> & {
  href?: ChakraBreadcrumbLinkProps['href'] | null;
  prefetch?: boolean;
  replace?: boolean;
};

export const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({
  as,
  children,
  href,
  prefetch,
  replace,
  ...rest
}) => {
  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const styles = recipe();

  if (!href) {
    return children;
  }

  const isComponentAs = Boolean(as) && typeof as !== 'string';

  if (isComponentAs) {
    const AsComp = as as React.ElementType;

    return (
      <ChakraBreadcrumb.Link css={styles.link} asChild {...rest}>
        <AsComp
          href={href}
          {...(prefetch !== undefined ? { prefetch } : {})}
          {...(replace ? { replace: true } : {})}
        >
          {children}
        </AsComp>
      </ChakraBreadcrumb.Link>
    );
  }

  return (
    <ChakraBreadcrumb.Link css={styles.link} as={as} href={href} {...rest}>
      {children}
    </ChakraBreadcrumb.Link>
  );
};

import React, { FC, PropsWithChildren } from 'react';

import {
  BreadcrumbRootProps as BreadcrumbProps,
  Breadcrumb as ChakraBreadcrumb,
  useSlotRecipe,
} from '@chakra-ui/react';

import { BreadcrumbSeparator } from './Separator';

export interface BreadcrumbsPropsExtended extends BreadcrumbProps {
  separator?: React.ReactNode;
}

export const Breadcrumbs: FC<PropsWithChildren<BreadcrumbsPropsExtended>> = ({
  children,
  ...props
}) => {
  const { separator, ...rest } = props;

  const recipe = useSlotRecipe({ key: 'breadcrumbs' });
  const styles = recipe();

  return (
    <ChakraBreadcrumb.Root {...rest}>
      <ChakraBreadcrumb.List css={styles.list}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          const isLast = index === React.Children.count(children) - 1;

          if (isLast) {
            return React.cloneElement(child as React.ReactElement);
          }

          return (
            <>
              {React.cloneElement(child as React.ReactElement)}
              {separator ? separator : <BreadcrumbSeparator />}
            </>
          );
        })}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  );
};

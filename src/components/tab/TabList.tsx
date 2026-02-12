'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Tabs as ChakraTabs,
  TabsListProps as ChakraTabsListProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';

import { Box } from '../box';

type TabsVariant = RecipeVariantProps<typeof tabsRecipe>['variant'];

export type TabListProps = Omit<ChakraTabsListProps, 'variant'> &
  RecipeVariantProps<typeof tabsRecipe>;

export const TabList: FC<PropsWithChildren<TabListProps>> = ({
  variant,
  children,
  ...rest
}) => {
  const recipe = useSlotRecipe({ key: 'tabs' });
  const styles = recipe({ variant });

  return (
    <Box overflowX="auto">
      <ChakraTabs.List {...rest} css={styles.list}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ variant: TabsVariant }>,
                { variant },
              )
            : child,
        )}
      </ChakraTabs.List>
    </Box>
  );
};

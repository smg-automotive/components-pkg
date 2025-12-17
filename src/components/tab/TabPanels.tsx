'use client';

import React, { FC, PropsWithChildren } from 'react';
import { RecipeVariantProps, useSlotRecipe } from '@chakra-ui/react';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';

import { Box } from '../box';

type TabsVariant = RecipeVariantProps<typeof tabsRecipe>['variant'];

export type TabPanelsProps = RecipeVariantProps<typeof tabsRecipe>;

export const TabPanels: FC<PropsWithChildren<TabPanelsProps>> = ({
  variant,
  children,
}) => {
  const recipe = useSlotRecipe({ key: 'tabs' });
  const styles = recipe({ variant });

  return (
    <Box css={styles.contentGroup}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ variant: TabsVariant }>,
              { variant },
            )
          : child,
      )}
    </Box>
  );
};

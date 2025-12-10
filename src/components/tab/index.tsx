'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Tabs as ChakraTabs,
  TabsRootProps as ChakraTabsRootProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';

type TabsVariant = RecipeVariantProps<typeof tabsRecipe>['variant'];

export type TabsProps = Omit<ChakraTabsRootProps, 'variant'> &
  RecipeVariantProps<typeof tabsRecipe>;

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  variant,
  children,
  ...rest
}) => {
  const recipe = useSlotRecipe({ key: 'tabs' });
  const styles = recipe({ variant });

  return (
    <ChakraTabs.Root {...rest} css={styles.root}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ variant: TabsVariant }>,
              { variant },
            )
          : child,
      )}
    </ChakraTabs.Root>
  );
};

export { Tab, TabProps } from './Tab';
export { TabList, TabListProps } from './TabList';
export { TabPanel, TabPanelProps } from './TabPanel';
export { TabPanels, TabPanelsProps } from './TabPanels';

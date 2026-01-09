'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Tabs as ChakraTabs,
  TabsContentProps as ChakraTabsContentProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';

export type TabPanelProps = Omit<ChakraTabsContentProps, 'variant'> &
  RecipeVariantProps<typeof tabsRecipe>;

export const TabPanel: FC<PropsWithChildren<TabPanelProps>> = ({
  variant,
  children,
  ...rest
}) => {
  const recipe = useSlotRecipe({ key: 'tabs' });
  const styles = recipe({ variant });

  return (
    <ChakraTabs.Content {...rest} css={styles.content}>
      {children}
    </ChakraTabs.Content>
  );
};

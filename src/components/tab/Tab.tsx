'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Tabs as ChakraTabs,
  TabsTriggerProps as ChakraTabsTriggerProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { tabsRecipe } from 'src/themes/shared/slotRecipes/tabs';

export type TabProps = Omit<ChakraTabsTriggerProps, 'variant'> &
  RecipeVariantProps<typeof tabsRecipe>;

export const Tab: FC<PropsWithChildren<TabProps>> = ({
  variant,
  children,
  ...rest
}) => {
  const recipe = useSlotRecipe({ key: 'tabs' });
  const styles = recipe({ variant });

  return (
    <ChakraTabs.Trigger {...rest} css={styles.trigger}>
      {children}
    </ChakraTabs.Trigger>
  );
};

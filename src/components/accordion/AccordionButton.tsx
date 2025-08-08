import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItemTriggerProps as ChakraAccordionItemTriggerProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

import { Box } from '../box';

export type AccordionButtonProps = ChakraAccordionItemTriggerProps &
  RecipeVariantProps<typeof accordionRecipe> & {
    leftIcon?: React.ReactNode;
  };

export const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props,
) => {
  const recipe = useSlotRecipe({ key: 'accordion' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });

  const { children, leftIcon, ...rest } = restProps;

  return (
    <ChakraAccordion.ItemTrigger {...rest} css={styles.button}>
      {leftIcon ? <Box mr="sm">{leftIcon}</Box> : null}
      <Box as="span" flex="1" textAlign="left">
        {children}
      </Box>
      <ChakraAccordion.ItemIndicator css={styles.indicator} />
    </ChakraAccordion.ItemTrigger>
  );
};

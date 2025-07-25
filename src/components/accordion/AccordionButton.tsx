import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItemTriggerProps as ChakraAccordionItemTriggerProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/recipes/accordion';

import { Box } from '../box';

interface AccordionButtonProps extends ChakraAccordionItemTriggerProps {
  leftIcon?: React.ReactNode;
  variant?: 'light' | 'dark' | 'minimal';
}

export const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props,
) => {
  const recipe = useSlotRecipe({ recipe: accordionRecipe });
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

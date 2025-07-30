import React, { FC, PropsWithChildren } from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItemBodyProps as ChakraAccordionItemBodyProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

export type AccordionPanelProps = ChakraAccordionItemBodyProps &
  RecipeVariantProps<typeof accordionRecipe>;

export const AccordionPanel: FC<PropsWithChildren<AccordionPanelProps>> = (
  props,
) => {
  const recipe = useSlotRecipe({ recipe: accordionRecipe });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });

  const { children, ...rest } = restProps;

  return (
    <ChakraAccordion.ItemContent css={styles.content}>
      <ChakraAccordion.ItemBody {...rest} css={styles.body}>
        {children}
      </ChakraAccordion.ItemBody>
    </ChakraAccordion.ItemContent>
  );
};

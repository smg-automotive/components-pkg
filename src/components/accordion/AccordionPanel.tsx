import React, { FC, PropsWithChildren } from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItemBodyProps as ChakraAccordionItemBodyProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/recipes/accordion';

interface AccordionPanelProps extends ChakraAccordionItemBodyProps {
  variant?: 'light' | 'dark' | 'minimal';
}

export const AccordionPanel: FC<PropsWithChildren<AccordionPanelProps>> = (
  props,
) => {
  const recipe = useSlotRecipe({ recipe: accordionRecipe });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });

  const { children, ...rest } = restProps;

  return (
    <ChakraAccordion.ItemContent>
      <ChakraAccordion.ItemBody {...rest} css={styles.body}>
        {children}
      </ChakraAccordion.ItemBody>
    </ChakraAccordion.ItemContent>
  );
};

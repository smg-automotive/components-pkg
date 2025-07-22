'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionRootProps as ChakraAccordionRootProps,
  useRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/recipes/accordion';

export type { ChakraAccordionRootProps };

export const Accordion: FC<PropsWithChildren<ChakraAccordionRootProps>> = (
  props,
) => {
  const { children, multiple, ...accordionProps } = props;

  const recipe = useRecipe({ recipe: accordionRecipe });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <ChakraAccordion.Root multiple={multiple} {...accordionProps} css={styles}>
      {children}
    </ChakraAccordion.Root>
  );
};

'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionRootProps as ChakraAccordionRootProps,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

export type AccordionProps = ChakraAccordionRootProps &
  RecipeVariantProps<typeof accordionRecipe>;

export const Accordion: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const recipe = useSlotRecipe({ key: 'accordion' });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  const { children, ...rest } = restProps;

  return (
    <ChakraAccordion.Root {...rest}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, {
              variant: recipeProps.variant,
            })
          : child,
      )}
    </ChakraAccordion.Root>
  );
};

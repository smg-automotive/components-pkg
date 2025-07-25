'use client';

import React, { FC, PropsWithChildren } from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItemProps as ChakraAccordionItemProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

interface AccordionItemProps extends ChakraAccordionItemProps {
  variant?: 'light' | 'dark' | 'minimal';
}

export const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (
  props,
) => {
  const recipe = useSlotRecipe({ recipe: accordionRecipe });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe({ ...recipeProps });

  const { children, ...rest } = restProps;

  return (
    <ChakraAccordion.Item {...rest} css={styles.item}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, {
              variant: recipeProps.variant,
            })
          : child,
      )}
    </ChakraAccordion.Item>
  );
};

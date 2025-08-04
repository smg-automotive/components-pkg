import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  RecipeVariantProps,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

import { Accordion } from '../accordion';

export type MobileOnlyAccordionProps = RecipeVariantProps<
  typeof accordionRecipe
> &
  Pick<ChakraAccordion.RootProps, 'multiple' | 'collapsible'>;

const MobileOnlyAccordion: FC<PropsWithChildren<MobileOnlyAccordionProps>> = (
  props,
) => {
  const { children, ...restProps } = props;

  return <Accordion {...restProps}>{children}</Accordion>;
};

export default MobileOnlyAccordion;

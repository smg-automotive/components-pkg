import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  RecipeVariantProps,
} from '@chakra-ui/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

import { Accordion } from '../accordion';

export type Props = RecipeVariantProps<typeof accordionRecipe> &
  Pick<ChakraAccordion.RootProps, 'multiple' | 'collapsible'>;

const MobileOnlyAccordion: FC<PropsWithChildren<Props>> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Accordion multiple {...restProps}>
      {children}
    </Accordion>
  );
};

export default MobileOnlyAccordion;

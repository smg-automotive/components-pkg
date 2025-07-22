import React, { FC, PropsWithChildren } from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItemTriggerProps as ChakraAccordionItemTriggerProps,
} from '@chakra-ui/react';

import { Box } from '../box';
import { AccordionIcon } from './AccordionIcon';

interface AccordionButtonProps extends ChakraAccordionItemTriggerProps {
  leftIcon?: React.ReactNode;
}

export const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props,
) => {
  const { children, leftIcon, ...itemTriggerProps } = props;

  return (
    <ChakraAccordion.ItemTrigger {...itemTriggerProps}>
      {leftIcon ? <Box mr="sm">{leftIcon}</Box> : null}
      <Box as="span" flex="1" textAlign="left">
        {children}
      </Box>
      <AccordionIcon isOpen={itemTriggerProps['aria-expanded'] === 'true'} />
    </ChakraAccordion.ItemTrigger>
  );
};

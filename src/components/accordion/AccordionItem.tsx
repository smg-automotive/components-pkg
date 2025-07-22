import React, { FC, PropsWithChildren } from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItemProps as ChakraAccordionItemProps,
} from '@chakra-ui/react';

export const AccordionItem: FC<PropsWithChildren<ChakraAccordionItemProps>> = (
  props,
) => {
  const { children, ...itemProps } = props;

  return <ChakraAccordion.Item {...itemProps}>{children}</ChakraAccordion.Item>;
};

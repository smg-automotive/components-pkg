import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionItem as ChakraAccordionItem,
  AccordionItemProps as ChakraAccordionItemProps,
} from '@chakra-ui/react';

const AccordionItem: FC<PropsWithChildren<ChakraAccordionItemProps>> = (
  props,
) => {
  const { children, ...itemProps } = props;

  return <ChakraAccordionItem {...itemProps}>{children}</ChakraAccordionItem>;
};

export default AccordionItem;

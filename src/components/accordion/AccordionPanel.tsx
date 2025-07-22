import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionItemBody as ChakraAccordionItemBody,
  AccordionItemBodyProps as ChakraAccordionItemBodyProps,
  AccordionItemContent as ChakraAccordionItemContent,
} from '@chakra-ui/react';

export const AccordionPanel: FC<
  PropsWithChildren<ChakraAccordionItemBodyProps>
> = (props) => {
  const { children, ...bodyProps } = props;

  return (
    <ChakraAccordionItemContent>
      <ChakraAccordionItemBody {...bodyProps}>
        {children}
      </ChakraAccordionItemBody>
    </ChakraAccordionItemContent>
  );
};

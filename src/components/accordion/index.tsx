import React, { FC, PropsWithChildren } from 'react';

import { AccordionProps, Accordion as ChakraAccordion } from '@chakra-ui/react';

const Accordion: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const { children, ...accordionProps } = props;

  return <ChakraAccordion {...accordionProps}>{children}</ChakraAccordion>;
};

export default Accordion;
export type { AccordionProps };

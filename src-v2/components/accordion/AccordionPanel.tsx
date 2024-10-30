import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionPanel as ChakraAccordionPanel,
  AccordionPanelProps as ChakraAccordionPanelProps,
} from '@chakra-ui/react';

const AccordionPanel: FC<PropsWithChildren<ChakraAccordionPanelProps>> = (
  props,
) => {
  const { children, ...panelProps } = props;

  return (
    <ChakraAccordionPanel {...panelProps}>{children}</ChakraAccordionPanel>
  );
};

export default AccordionPanel;

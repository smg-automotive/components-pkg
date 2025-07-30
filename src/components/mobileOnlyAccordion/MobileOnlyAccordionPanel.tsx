import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemBodyProps as ChakraAccordionItemBodyProps } from '@chakra-ui/react';

import { Box } from '../box';
import { AccordionPanel } from '../accordion/AccordionPanel';
interface AccordionPanelProps extends ChakraAccordionItemBodyProps {
  variant?: 'light' | 'dark' | 'minimal';
}

const MobileOnlyAccordionPanel: FC<PropsWithChildren<AccordionPanelProps>> = (
  props,
) => {
  const { children, ...rest } = props;

  return (
    <>
      <Box
        hideBelow="md"
        textStyle="body-small"
        pb="md"
        paddingX="lg"
        {...rest}
      >
        {children}
      </Box>
      <Box hideFrom="md">
        <AccordionPanel {...rest}>{children}</AccordionPanel>
      </Box>
    </>
  );
};

export default MobileOnlyAccordionPanel;

import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionItemProps as ChakraAccordionItemProps,
  Show,
} from '@chakra-ui/react';

import { AccordionButton, AccordionItem, AccordionPanel, Box } from '../index';

interface AccordionMenuItemProps extends ChakraAccordionItemProps {
  title: string;
}

const AccordionMenuItem: FC<PropsWithChildren<AccordionMenuItemProps>> = (
  props
) => {
  const { children, title, ...itemProps } = props;

  return (
    <>
      <Show below="xs">
        <AccordionItem {...itemProps}>
          <AccordionButton>{title}</AccordionButton>
          <AccordionPanel>{children}</AccordionPanel>
        </AccordionItem>
      </Show>
      <Show above="sm">
        <Box>
          <Box>{title}</Box>
          <Box>{children}</Box>
        </Box>
      </Show>
    </>
  );
};

export default AccordionMenuItem;

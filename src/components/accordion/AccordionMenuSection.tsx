import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionItemProps as ChakraAccordionItemProps,
  Hide,
  Show,
} from '@chakra-ui/react';

import AccordionPanel from './AccordionPanel';
import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';
import Box from '../box';

interface AccordionMenuItemProps extends ChakraAccordionItemProps {
  title: string;
}

const AccordionMenuSection: FC<PropsWithChildren<AccordionMenuItemProps>> = (
  props
) => {
  const { children, title, ...itemProps } = props;

  return (
    <>
      <Show below="sm">
        <AccordionItem {...itemProps}>
          <AccordionButton>{title}</AccordionButton>
          <AccordionPanel>{children}</AccordionPanel>
        </AccordionItem>
      </Show>
      <Hide below="sm">
        <Box paddingY="md" textStyle="heading4">
          {title}
        </Box>
        <Box pb="md">{children}</Box>
      </Hide>
    </>
  );
};

export default AccordionMenuSection;

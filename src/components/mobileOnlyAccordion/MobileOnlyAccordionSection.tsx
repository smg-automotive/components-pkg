import React, { FC, PropsWithChildren } from 'react';

import {
  AccordionItemProps as ChakraAccordionItemProps,
  Hide,
  Show,
} from '@chakra-ui/react';

import { H4 } from '../heading';
import Box from '../box';
import AccordionPanel from '../accordion/AccordionPanel';
import AccordionItem from '../accordion/AccordionItem';
import AccordionButton from '../accordion/AccordionButton';

interface MobileOnlyAccordionItemProps extends ChakraAccordionItemProps {
  title: string;
}

const MobileOnlyAccordionSection: FC<
  PropsWithChildren<MobileOnlyAccordionItemProps>
> = (props) => {
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
        <H4 paddingY="md">{title}</H4>
        <Box pb="md">{children}</Box>
      </Hide>
    </>
  );
};

export default MobileOnlyAccordionSection;

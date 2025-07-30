import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemTriggerProps as ChakraAccordionItemTriggerProps } from '@chakra-ui/react';

import { Box } from '../box';
import { AccordionButton } from '../accordion/AccordionButton';
interface AccordionButtonProps extends ChakraAccordionItemTriggerProps {
  leftIcon?: React.ReactNode;
  variant?: 'light' | 'dark' | 'minimal';
}

const MobileOnlyAccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props,
) => {
  const { children, ...rest } = props;

  return (
    <>
      <Box hideBelow="md" textStyle="heading5" paddingX="lg" paddingY="md">
        {children}
      </Box>
      <Box hideFrom="md">
        <AccordionButton {...rest}>{children}</AccordionButton>
      </Box>
    </>
  );
};

export default MobileOnlyAccordionButton;

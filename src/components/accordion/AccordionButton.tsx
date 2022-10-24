import React, { FC, PropsWithChildren } from 'react';
import {
  AccordionButton as ChakraAccordionButton,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionIcon as ChakraAccordionIcon,
} from '@chakra-ui/react';

import { Box } from '../index';

interface AccordionButtonProps extends ChakraAccordionButtonProps {
  leftIcon?: React.ReactNode;
}

const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props
) => {
  const { children, leftIcon, ...buttonProps } = props;

  return (
    <ChakraAccordionButton {...buttonProps}>
      {leftIcon ? <Box mr="sm">{leftIcon}</Box> : null}
      <Box flex="1" textAlign="left">
        {children}
      </Box>
      <ChakraAccordionIcon />
    </ChakraAccordionButton>
  );
};

export default AccordionButton;

import React, { FC, PropsWithChildren } from 'react';
import {
  AccordionButton as ChakraAccordionButton,
  AccordionButtonProps as ChakraAccordionButtonProps,
} from '@chakra-ui/react';

import Box from '../box';
import AccordionIcon from './AccordionIcon';

interface AccordionButtonProps extends ChakraAccordionButtonProps {
  leftIcon?: React.ReactNode;
}

const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = (
  props,
) => {
  const { children, leftIcon, ...buttonProps } = props;

  return (
    <ChakraAccordionButton {...buttonProps}>
      {leftIcon ? <Box mr="sm">{leftIcon}</Box> : null}
      <Box flex="1" textAlign="left">
        {children}
      </Box>
      <AccordionIcon />
    </ChakraAccordionButton>
  );
};

export default AccordionButton;

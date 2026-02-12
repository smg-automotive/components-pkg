import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../box';
import {
  AccordionButton,
  AccordionButtonProps,
} from '../accordion/AccordionButton';

export const MobileOnlyAccordionButton: FC<
  PropsWithChildren<AccordionButtonProps>
> = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <Box hideBelow="md" textStyle="heading5" paddingX="lg" paddingBottom="md">
        {children}
      </Box>
      <Box hideFrom="md">
        <AccordionButton {...rest}>{children}</AccordionButton>
      </Box>
    </>
  );
};

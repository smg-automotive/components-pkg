import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../box';
import {
  AccordionPanel,
  AccordionPanelProps,
} from '../accordion/AccordionPanel';

export const MobileOnlyAccordionPanel: FC<
  PropsWithChildren<AccordionPanelProps>
> = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <Box hideBelow="md" textStyle="body-small" paddingX="lg" {...rest}>
        {children}
      </Box>
      <Box hideFrom="md">
        <AccordionPanel {...rest}>{children}</AccordionPanel>
      </Box>
    </>
  );
};

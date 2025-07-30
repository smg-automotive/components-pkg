import React, { FC, PropsWithChildren } from 'react';

import { Box } from '../box';
import {
  AccordionPanel,
  AccordionPanelProps,
} from '../accordion/AccordionPanel';

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

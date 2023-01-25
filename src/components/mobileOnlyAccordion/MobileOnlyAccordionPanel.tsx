import React, { FC, PropsWithChildren } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import Show from '../show';
import Box from '../box';
import AccordionPanel from '../accordion/AccordionPanel';

const MobileOnlyAccordionPanel: FC<PropsWithChildren> = (props) => {
  const { children, ...rest } = props;
  const { panelOnDesktop } = useMultiStyleConfig('Accordion');

  return (
    <>
      <Show above="md">
        <Box __css={panelOnDesktop} {...rest}>
          {children}
        </Box>
      </Show>
      <Show below="md">
        <AccordionPanel {...rest}>{children}</AccordionPanel>
      </Show>
    </>
  );
};

export default MobileOnlyAccordionPanel;

import React, { FC, PropsWithChildren } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import Show from '@/src/components/show';
import Hide from '@/src/components/hide';
import Box from '@/src/components/box';
import AccordionPanel from '@/src/components/accordion/AccordionPanel';

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
      <Hide above="md">
        <AccordionPanel {...rest}>{children}</AccordionPanel>
      </Hide>
    </>
  );
};

export default MobileOnlyAccordionPanel;

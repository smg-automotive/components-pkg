import React, { FC, PropsWithChildren } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';

import Show from '../show';
import Box from '../box';
import AccordionButton from '../accordion/AccordionButton';

const MobileOnlyAccordionButton: FC<PropsWithChildren> = (props) => {
  const { children, ...rest } = props;
  const { titleOnDesktop } = useMultiStyleConfig('Accordion');

  return (
    <>
      <Show above="md">
        <Box __css={titleOnDesktop} {...rest}>
          {children}
        </Box>
      </Show>
      <Show below="md">
        <AccordionButton {...rest}>{children}</AccordionButton>
      </Show>
    </>
  );
};

export default MobileOnlyAccordionButton;

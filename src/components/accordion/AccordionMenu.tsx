import React, { FC, PropsWithChildren } from 'react';

import { AccordionProps, Show } from '@chakra-ui/react';

import Accordion from './index';

const AccordionMenu: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const { children, ...accordionProps } = props;

  return (
    <>
      <Show below="xs">
        <Accordion allowToggle {...accordionProps}>
          {children}
        </Accordion>
      </Show>
      <Show above="sm">{children}</Show>
    </>
  );
};

export default AccordionMenu;

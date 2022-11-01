import React, { FC, PropsWithChildren } from 'react';

import { AccordionProps, Hide, Show } from '@chakra-ui/react';

import Accordion from './index';

const AccordionMenu: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const { children, ...restProps } = props;

  return (
    <>
      <Show below="sm">
        <Accordion allowMultiple {...restProps}>
          {children}
        </Accordion>
      </Show>
      <Hide below="sm">{children}</Hide>
    </>
  );
};

export default AccordionMenu;

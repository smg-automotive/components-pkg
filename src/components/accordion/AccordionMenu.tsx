import React, { FC, PropsWithChildren } from 'react';

import { AccordionProps } from '@chakra-ui/react';

import Accordion from './index';

const AccordionMenu: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Accordion allowMultiple {...restProps}>
      {children}
    </Accordion>
  );
};

export default AccordionMenu;

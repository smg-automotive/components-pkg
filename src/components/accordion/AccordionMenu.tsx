import React, { FC, PropsWithChildren } from 'react';
import { AccordionProps } from '@chakra-ui/react';

import Accordion from './index';

type Props = Pick<AccordionProps, 'allowMultiple' | 'allowToggle'>;

const AccordionMenu: FC<PropsWithChildren<Props>> = (props) => {
  const { children, allowMultiple, ...restProps } = props;

  return (
    <Accordion allowMultiple={allowMultiple} {...restProps}>
      {children}
    </Accordion>
  );
};

export default AccordionMenu;

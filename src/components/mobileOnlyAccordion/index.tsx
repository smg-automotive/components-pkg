import React, { FC, PropsWithChildren } from 'react';
import { AccordionProps } from '@chakra-ui/react';

import Accordion from '../accordion';

type Props = {
  variant?: 'light' | 'dark';
} & Pick<AccordionProps, 'allowMultiple' | 'allowToggle'>;

const MobileOnlyAccordion: FC<PropsWithChildren<Props>> = (props) => {
  const { children, ...restProps } = props;

  console.log('accordion rest', restProps);

  return (
    <Accordion allowMultiple {...restProps}>
      {children}
    </Accordion>
  );
};

export default MobileOnlyAccordion;

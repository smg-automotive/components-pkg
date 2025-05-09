import React, { FC, PropsWithChildren } from 'react';
import { AccordionProps } from '@chakra-ui/react';

import Accordion from '../accordion';

export type Props = {
  variant?: 'light' | 'dark';
} & Pick<
  AccordionProps,
  'allowMultiple' | 'allowToggle' | 'index' | 'onChange'
>;

const MobileOnlyAccordion: FC<PropsWithChildren<Props>> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Accordion allowMultiple {...restProps}>
      {children}
    </Accordion>
  );
};

export default MobileOnlyAccordion;

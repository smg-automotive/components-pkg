import React, { FC, PropsWithChildren } from 'react';
import { Accordion as ChakraAccordion } from '@chakra-ui/react';

import { Accordion } from '../accordion';

export type Props = {
  variant?: 'light' | 'dark';
} & Pick<ChakraAccordion.RootProps, 'multiple' | 'collapsible'>;

const MobileOnlyAccordion: FC<PropsWithChildren<Props>> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Accordion multiple {...restProps}>
      {children}
    </Accordion>
  );
};

export default MobileOnlyAccordion;

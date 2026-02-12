import React, { FC, PropsWithChildren } from 'react';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { AccordionItem, AccordionItemProps } from '../accordion/AccordionItem';

export const MobileOnlyAccordionItem: FC<
  PropsWithChildren<AccordionItemProps>
> = (props) => {
  const { children, style, ...rest } = props;
  const isAboveMd = useMediaQuery({ above: 'md' });

  return (
    <AccordionItem style={isAboveMd ? { border: 'none' } : style} {...rest}>
      {children}
    </AccordionItem>
  );
};

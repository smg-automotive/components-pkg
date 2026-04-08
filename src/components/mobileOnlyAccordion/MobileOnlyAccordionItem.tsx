import React, { FC, PropsWithChildren } from 'react';

import { AccordionItem, AccordionItemProps } from '../accordion/AccordionItem';

export const MobileOnlyAccordionItem: FC<
  PropsWithChildren<AccordionItemProps>
> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <AccordionItem
      style={style}
      border={{ base: undefined, md: 'none' }}
      {...rest}
    >
      {children}
    </AccordionItem>
  );
};

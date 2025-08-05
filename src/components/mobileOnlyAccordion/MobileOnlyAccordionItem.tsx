import React, { FC, PropsWithChildren } from 'react';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { AccordionItem, AccordionItemProps } from '../accordion/AccordionItem';

const MobileOnlyAccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (
  props,
) => {
  const { children, ...rest } = props;
  const isAboveMd = useMediaQuery({ above: 'md' });

  return (
    <AccordionItem
      style={
        isAboveMd
          ? {
              border: 'none',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </AccordionItem>
  );
};

export default MobileOnlyAccordionItem;

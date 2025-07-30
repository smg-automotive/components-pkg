import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemProps } from '@chakra-ui/react';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { AccordionItem } from '../accordion/AccordionItem';

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

import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemProps, useQuery } from '@chakra-ui/react';

import AccordionItem from '../accordion/AccordionItem';

const MobileOnlyAccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (
  props,
) => {
  const { children, ...rest } = props;
  const query = useQuery({ above: 'md' });
  const media = `@media ${query}`;

  return (
    <AccordionItem
      sx={{
        [media]: {
          border: 'none',
          _last: {
            border: 'none',
          },
        },
      }}
      {...rest}
    >
      {children}
    </AccordionItem>
  );
};

export default MobileOnlyAccordionItem;

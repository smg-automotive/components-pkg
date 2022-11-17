import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemProps, useMediaQuery } from '@chakra-ui/react';

import AccordionItem from '../accordion/AccordionItem';
import { breakpoints } from '../../themes';

const MobileOnlyAccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (
  props
) => {
  const { children, ...rest } = props;
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints.md.px}px)`);
  const desktopStyle = isLargerThanMd ? { border: 'none' } : {};

  console.log('desktopStyle', desktopStyle);
  console.log('rest', rest);

  return (
    <AccordionItem style={desktopStyle} {...rest}>
      {children}
    </AccordionItem>
  );
};

export default MobileOnlyAccordionItem;

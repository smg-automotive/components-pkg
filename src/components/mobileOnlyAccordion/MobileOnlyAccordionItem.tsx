import React, { FC, PropsWithChildren } from 'react';

import { AccordionItemProps, useMediaQuery } from '@chakra-ui/react';

import AccordionItem from '../accordion/AccordionItem';
import { breakpoints } from '../../themes';

const MobileOnlyAccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (
  props
) => {
  const { children, ...rest } = props;
  const [isLargerThan1024] = useMediaQuery(
    `(min-width: ${breakpoints.md.px}px)`
  );
  const desktopStyle = isLargerThan1024 ? { border: 'none' } : {};

  return (
    <AccordionItem style={desktopStyle} isDisabled={isLargerThan1024} {...rest}>
      {children}
    </AccordionItem>
  );
};

export default MobileOnlyAccordionItem;

import React, { FC, PropsWithChildren } from 'react';

import { useMediaQuery, useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';
import AccordionButton from '../accordion/AccordionButton';
import { breakpoints } from '../../themes';

const MobileOnlyAccordionButton: FC<PropsWithChildren> = (props) => {
  const { children, ...rest } = props;
  const { titleOnDesktop } = useMultiStyleConfig('Accordion');
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints.md.px}px)`);

  if (!isLargerThanMd) {
    return <AccordionButton {...rest}>{children}</AccordionButton>;
  }

  return (
    <Box __css={titleOnDesktop} {...rest}>
      {children}
    </Box>
  );
};

export default MobileOnlyAccordionButton;

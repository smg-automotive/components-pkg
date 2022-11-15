import React, { FC, PropsWithChildren } from 'react';

import { useMediaQuery, useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';
import AccordionPanel from '../accordion/AccordionPanel';
import { breakpoints } from '../../themes';

const MobileOnlyAccordionPanel: FC<PropsWithChildren> = (props) => {
  const { children, ...rest } = props;
  const { panel } = useMultiStyleConfig('Accordion');
  const [isLargerThan1024] = useMediaQuery(
    `(min-width: ${breakpoints.md.px}px)`
  );

  if (!isLargerThan1024) {
    return <AccordionPanel {...rest}>{children}</AccordionPanel>;
  }

  return (
    <Box __css={panel} pb="md" {...rest}>
      {children}
    </Box>
  );
};

export default MobileOnlyAccordionPanel;

import React, { FC, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { BreakpointName } from 'src/themes/shared/breakpoints';

type Props = {
  above?: BreakpointName;
  below?: BreakpointName;
};

export const Hide: FC<PropsWithChildren<Props>> = ({
  above,
  below,
  children,
}) => {
  return (
    <Box
      {...(above ? { hideFrom: above } : {})}
      {...(below ? { hideBelow: below } : {})}
    >
      {children}
    </Box>
  );
};

import React, { FC, PropsWithChildren } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { BreakpointName } from 'src/themes/shared/breakpoints';

type Props = Omit<BoxProps, 'display'> & {
  showDisplay?: BoxProps['display'];
  above?: BreakpointName;
  below?: BreakpointName;
};

export const Show: FC<PropsWithChildren<Props>> = ({
  above,
  below,
  showDisplay,
  ...rest
}) => {
  return (
    <Box
      display={showDisplay}
      {...rest}
      {...(above ? { hideBelow: above } : {})}
      {...(below ? { hideFrom: below } : {})}
    />
  );
};

import React, { FC, PropsWithChildren } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { BreakpointName } from 'src/themes/shared/breakpoints';

type Props = BoxProps & {
  above?: BreakpointName;
  below?: BreakpointName;
};

export const Show: FC<PropsWithChildren<Props>> = ({
  above,
  below,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      {...(above ? { hideBelow: above } : {})}
      {...(below ? { hideFrom: below } : {})}
    />
  );
};

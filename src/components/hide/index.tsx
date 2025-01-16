import React, { FC } from 'react';
import { BoxProps, HideProps, useQuery } from '@chakra-ui/react';

import { Box } from '../box';

export type Props = Omit<HideProps, 'ssr'> & Omit<BoxProps, 'sx'>;

export const Hide: FC<Props> = ({ children, breakpoint, above, below, ...props }) => {
  const queryProps = { breakpoint, above, below };
  const query = useQuery(queryProps);
  const media = query && `@media ${query}`;

  return (
    <Box
    // needs tokens
      sx={{
        [media]: {
          display: 'none',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};


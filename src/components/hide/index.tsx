import React, { FC } from 'react';
import { BoxProps, HideProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Hide: FC<Omit<HideProps, 'ssr'> & Omit<BoxProps, 'sx'>> = ({
  children,
  breakpoint,
  above,
  below,
  ...props
}) => {
  const queryProps = { breakpoint, above, below };
  const query = useQuery(queryProps);
  const media = query && `@media ${query}`;

  return (
    <Box
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

export default Hide;

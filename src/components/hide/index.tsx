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
  const testId = `hide-${Object.entries(queryProps)
    .map(([key, value]) => (value ? `${key}-${value}` : null))
    .filter(Boolean)
    .join('-')}`;

  return (
    <Box
      sx={{
        [media]: {
          display: 'none',
        },
      }}
      data-testid={testId}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Hide;

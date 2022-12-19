import React, { FC } from 'react';
import { BoxProps, HideProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Hide: FC<Omit<HideProps, 'ssr'> & BoxProps> = ({
  children,
  breakpoint,
  above,
  below,
  ...props
}) => {
  const query = useQuery({ breakpoint, above, below });
  const media = query && `@media ${query}`;
  const testId = `hide-${Object.entries(props)
    .map((arr) => arr.join('-'))
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

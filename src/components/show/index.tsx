import React, { FC } from 'react';
import { BoxProps, ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Show: FC<Omit<ShowProps, 'ssr'> & BoxProps> = ({
  children,
  breakpoint,
  above,
  below,
  ...props
}) => {
  const query = useQuery({ breakpoint, above, below });
  const media = `@media ${query}`;
  const testId = `show-${Object.entries(props)
    .map((arr) => arr.join('-'))
    .join('-')}`;

  return (
    <Box
      sx={{
        display: 'none',
        [media]: {
          display: 'block',
        },
      }}
      data-testid={testId}
      {...props}
    >
      {children}
    </Box>
  );
};
export default Show;

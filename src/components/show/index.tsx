import React, { FC } from 'react';
import { BoxProps, ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

type Props = {
  showDisplay?: string;
};
const Show: FC<Omit<ShowProps, 'ssr'> & Omit<BoxProps, 'sx'> & Props> = ({
  children,
  breakpoint,
  above,
  below,
  showDisplay,
  ...props
}) => {
  const queryProps = { breakpoint, above, below };
  const query = useQuery(queryProps);
  const media = `@media ${query}`;
  const testId = `show-${Object.entries(queryProps)
    .map(([key, value]) => (value ? `${key}-${value}` : null))
    .filter(Boolean)
    .join('-')}`;

  return (
    <Box
      sx={{
        display: 'none',
        [media]: {
          display: showDisplay || 'block',
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

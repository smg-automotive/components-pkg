import React, { FC } from 'react';
import { BoxProps, ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

type Props = {
  showDisplay?: Pick<BoxProps, 'display'>;
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
    .map((arr) => arr.join('-'))
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

import React, { FC } from 'react';
import { BoxProps, ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

export type Props = Omit<ShowProps, 'ssr'> &
  Omit<BoxProps, 'sx'> & {
    showDisplay?: string;
  };

const Show: FC<Props> = ({
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

  return (
    <Box
      sx={{
        display: 'none',
        [media]: {
          display: showDisplay || 'block',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
export default Show;

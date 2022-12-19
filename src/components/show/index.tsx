import React, { FC } from 'react';
import { BoxProps, ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

type Props = {
  showDisplay?: string;
};
const Show: FC<Omit<ShowProps, 'ssr'> & BoxProps & Props> = ({
  children,
  breakpoint,
  above,
  below,
  showDisplay,
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

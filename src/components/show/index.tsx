import React, { FC, PropsWithChildren } from 'react';
import { ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Show: FC<PropsWithChildren<ShowProps>> = ({ children, ...props }) => {
  const query = useQuery(props);
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
    >
      {children}
    </Box>
  );
};
export default Show;

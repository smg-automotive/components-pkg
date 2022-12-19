import React, { FC, PropsWithChildren } from 'react';
import { ShowProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Show: FC<PropsWithChildren<ShowProps>> = ({ children, ...props }) => {
  const query = useQuery(props);
  const media = `@media ${query}`;

  return (
    <Box
      sx={{
        display: 'none',
        [media]: {
          display: 'block',
        },
      }}
    >
      {children}
    </Box>
  );
};
export default Show;

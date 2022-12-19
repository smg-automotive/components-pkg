import React, { FC, PropsWithChildren } from 'react';
import { HideProps, useQuery } from '@chakra-ui/react';

import Box from '../box';

const Hide: FC<PropsWithChildren<HideProps>> = ({ children, ...props }) => {
  const query = useQuery(props);

  const media = query && `@media ${query}`;

  return (
    <Box
      sx={{
        [media]: {
          display: 'none',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Hide;

import React, { FC } from 'react';

import { MissingImageIcon } from '../icons';
import { Box, BoxProps } from '../box';

export type MissingImageProps = Pick<
  BoxProps,
  'width' | 'height' | 'aspectRatio'
>;

export const MissingImage: FC<MissingImageProps> = (props) => {
  return (
    <Box
      backgroundColor="gray.50"
      {...props}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MissingImageIcon
        data-testid="missing-image"
        boxSize="lg"
        color="gray.300"
      />
    </Box>
  );
};

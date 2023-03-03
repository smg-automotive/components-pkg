import React, { FC, PropsWithChildren } from 'react';

import GridItem from '../grid/GridItem';
import Grid from '../grid';
import Box from '../box';
import AspectRatio from '../aspectRatio';

type Props = {
  aspectRatio: number;
};

const TopListingBadge: FC<PropsWithChildren<Props>> = ({
  children,
  aspectRatio,
}) => {
  return (
    <Grid>
      <GridItem gridColumn={1} gridRow={1}>
        <AspectRatio ratio={aspectRatio}>{children}</AspectRatio>
      </GridItem>
      <GridItem
        gridColumn={1}
        gridRow={1}
        zIndex="docked"
        overflow="hidden"
        position="relative"
      >
        <Box
          transform="rotate(-45deg) translateX(-50%) translateY(12px)"
          transformOrigin="top left"
          bg="brand.100"
          color="gray.900"
          fontSize="xs"
          lineHeight={1.75}
          width="70px"
          fontWeight="bold"
          display="inline-block"
          textAlign="center"
        >
          TOP
        </Box>
      </GridItem>
    </Grid>
  );
};

export default TopListingBadge;

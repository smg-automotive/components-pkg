import React, { FC, PropsWithChildren } from 'react';
import { Badge } from '@chakra-ui/react';

import GridItem from '../grid/GridItem';
import Grid from '../grid';
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
        <Badge
          transform="rotate(-45deg) translateX(-50%) translateY(9px)"
          transformOrigin="top left"
          width="70px"
          textAlign="center"
          paddingLeft="sm"
        >
          Top
        </Badge>
      </GridItem>
    </Grid>
  );
};

export default TopListingBadge;

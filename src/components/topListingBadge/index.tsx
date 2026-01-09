import React, { FC, PropsWithChildren } from 'react';
import { AspectRatio, Badge, Grid, GridItem } from '@chakra-ui/react';

type Props = {
  aspectRatio?: number;
};

export const TopListingBadge: FC<PropsWithChildren<Props>> = ({
  children,
  aspectRatio,
}) => {
  return (
    <Grid>
      <GridItem gridColumn={1} gridRow={1}>
        {aspectRatio ? (
          <AspectRatio ratio={aspectRatio}>{children}</AspectRatio>
        ) : (
          children
        )}
      </GridItem>
      <GridItem
        gridColumn={1}
        gridRow={1}
        zIndex="docked"
        overflow="hidden"
        position="relative"
        pointerEvents="none"
        css={{ touchAction: 'none' }}
      >
        <Badge
          transform="rotate(-45deg) translate(-50%) translateY(9px)"
          position="absolute"
          transformOrigin="top left"
          width="4xl"
          textAlign="center"
          paddingLeft="sm"
          color="gray.900"
        >
          Top
        </Badge>
      </GridItem>
    </Grid>
  );
};

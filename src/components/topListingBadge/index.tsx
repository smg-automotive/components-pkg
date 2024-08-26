import React, { FC, PropsWithChildren } from 'react';
import { Badge } from '@chakra-ui/react';

import Box from '../box';
import AspectRatio from '../aspectRatio';

type Props = {
  aspectRatio?: number;
};

const TopListingBadge: FC<PropsWithChildren<Props>> = ({
  children,
  aspectRatio,
}) => {
  return (
    <Box position="relative" display="inline-block">
      {aspectRatio ? (
        <AspectRatio ratio={aspectRatio}>{children}</AspectRatio>
      ) : (
        children
      )}
      <Badge
        position="absolute"
        top={0}
        left={0}
        transform="rotate(-45deg) translateX(-50%) translateY(9px)"
        transformOrigin="top left"
        width="70px"
        textAlign="center"
        paddingLeft="sm"
        color="gray.900"
        zIndex="docked"
        pointerEvents="none"
        __css={{ touchAction: 'none' }}
      >
        Top
      </Badge>
    </Box>
  );
};

export default TopListingBadge;

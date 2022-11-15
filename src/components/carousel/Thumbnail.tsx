import React, { FC, PropsWithChildren } from 'react';

import AspectRatio from '../aspectRatio';

interface Props {
  onClick: () => void;
  isCurrent: boolean;
  thumbnailIndex: number;
  totalThumbnails: number;
}

const Thumbnail: FC<PropsWithChildren<Props>> = ({
  onClick,
  isCurrent,
  thumbnailIndex,
  totalThumbnails,
  children,
}) => {
  return (
    <AspectRatio
      ratio={4 / 3}
      onClick={onClick}
      width="3xl"
      flexShrink="0"
      cursor="pointer"
      mr="xs"
      border="4px"
      borderColor={isCurrent ? 'blue.400' : 'transparent'}
      aria-current={isCurrent}
      aria-label={`thumbnail ${thumbnailIndex + 1} of ${totalThumbnails}`}
    >
      {children}
    </AspectRatio>
  );
};

export default Thumbnail;

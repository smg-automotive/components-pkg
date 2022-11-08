import React, { FC, PropsWithChildren } from 'react';

import AspectRatio from '../aspectRatio';

interface Props {
  onClick: () => void;
  isCurrent: boolean;
}

const Thumbnail: FC<PropsWithChildren<Props>> = ({
  onClick,
  isCurrent,
  children,
}) => {
  return (
    <AspectRatio
      ratio={4 / 3}
      onClick={onClick}
      width="133px"
      flexShrink="0"
      cursor="pointer"
      mr="xs"
      border="4px"
      borderColor={isCurrent ? 'blue.400' : 'transparent'}
    >
      {children}
    </AspectRatio>
  );
};

export default Thumbnail;

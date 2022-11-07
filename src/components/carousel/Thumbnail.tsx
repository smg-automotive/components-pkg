import React, { FC, PropsWithChildren } from 'react';

import AspectRatio from '../aspectRatio';

interface Props {
  onClick: () => void;
  fullScreen: boolean;
}
const Thumbnail: FC<PropsWithChildren<Props>> = ({ onClick, children }) => {
  return (
    <AspectRatio
      ratio={4 / 3}
      onClick={onClick}
      width="130px"
      flexShrink="0"
      cursor="pointer"
      mr="xs"
    >
      {children}
    </AspectRatio>
  );
};

export default Thumbnail;

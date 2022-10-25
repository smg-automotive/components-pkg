import React, { FC, PropsWithChildren } from 'react';

import Box from '../box';

interface Props {
  onClick: () => void;
  slideIndex: number;
  totalSlides: number;
  isCurrent: boolean;
}

const Slide: FC<PropsWithChildren<Props>> = ({
  onClick,
  slideIndex,
  totalSlides,
  isCurrent,
  children,
}) => {
  return (
    <Box
      flexGrow="0"
      flexShrink="0"
      flexBasis="full"
      onClick={onClick}
      aria-roledescription="slide"
      aria-label={`${slideIndex + 1} of ${totalSlides}`}
      aria-current={isCurrent}
    >
      {children}
    </Box>
  );
};

export default Slide;

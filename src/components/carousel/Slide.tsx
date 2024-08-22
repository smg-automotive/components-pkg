import React, { FC, PropsWithChildren } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';

interface Props {
  onClick: () => void;
  slideIndex: number;
  totalSlides: number;
  isCurrent: boolean;
  fullScreen: boolean;
}

const Slide: FC<PropsWithChildren<Props>> = ({
  onClick,
  slideIndex,
  totalSlides,
  isCurrent,
  children,
  fullScreen,
}) => {
  const { slide } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {},
  );

  return (
    <Box
      __css={slide}
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

import React, { FC, PropsWithChildren } from 'react';
import { ResponsiveObject, useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';

interface Props {
  onClick: () => void;
  slideIndex: number;
  totalSlides: number;
  isCurrent: boolean;
  fullScreen: boolean;
  slidesPerView: ResponsiveObject<number>;
}

const Slide: FC<PropsWithChildren<Props>> = ({
  onClick,
  slideIndex,
  totalSlides,
  isCurrent,
  children,
  fullScreen,
  slidesPerView,
}) => {
  const { slide } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {},
  );

  const flexBasis = Object.entries(slidesPerView).reduce<
    ResponsiveObject<string>
  >((acc, [breakpoint, value]) => {
    acc[breakpoint] = `calc(100% / ${value})`;
    return acc;
  }, {});

  return (
    <Box
      __css={slide}
      flexBasis={flexBasis}
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

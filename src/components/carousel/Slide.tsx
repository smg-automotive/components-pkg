import React, { FC, PropsWithChildren } from 'react';
import { ResponsiveObject, useMultiStyleConfig } from '@chakra-ui/react';

import Box from '../box';

interface Props {
  onClick: () => void;
  slideIndex: number;
  totalSlides: number;
  isCurrent: boolean;
  fullScreen: boolean;
  slidesPerView: ResponsiveObject<number> | 1;
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

  const flexBasis =
    slidesPerView === 1
      ? 'full'
      : Object.entries(slidesPerView).reduce<ResponsiveObject<string>>(
          (acc, [breakpoint, value]) => {
            acc[breakpoint] = `calc(100% / ${value})`;
            return acc;
          },
          {},
        );

  return (
    <Box
      __css={slide}
      flexBasis={flexBasis}
      paddingLeft={slidesPerView === 1 ? 0 : { base: 'md', md: '2xl' }}
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

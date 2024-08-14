import React, { FC, PropsWithChildren } from 'react';
import {
  ResponsiveObject,
  ResponsiveValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';

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

  return (
    <Box
      __css={slide}
      flexBasis={`calc(100% / ${slidesPerView})`}
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

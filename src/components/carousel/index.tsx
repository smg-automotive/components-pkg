import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useMediaQuery, useMultiStyleConfig } from '@chakra-ui/react';

import ThumbnailPagination from './ThumbnailPagination';
import Slide from './Slide';
import NavigationButton, { Direction } from './NavigationButton';
import Flex from '../flex';
import Box from '../box';

interface Props {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
  onSlideSelect?: (index: number) => void;
  fullScreen?: boolean;
}

const Carousel: FC<PropsWithChildren<Props>> = ({
  startIndex = 0,
  onSlideClick,
  onSlideSelect,
  children,
  fullScreen = false,
}) => {
  const hasPagination = fullScreen;
  const slides: ReactNode[] = Array.isArray(children) ? children : [children];
  const numberOfSlides = slides.length;
  // 926px is the highest phone
  const [isMobileLandscape] = useMediaQuery(
    '(orientation: landscape) and (pointer: coarse) and (max-width: 926px)',
    { ssr: true, fallback: true }
  );

  const [selectedIndex, setSelectedIndex] = useState(startIndex);

  const { container, carousel, slideContainer } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {}
  );

  const [mainCarouselRef, mainCarousel] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex,
    speed: 20,
  });
  const [paginationCarouselRef, paginationCarousel] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 'auto',
    inViewThreshold: 1,
  });

  const scroll = useCallback(
    (direction: Direction) => {
      switch (direction) {
        case 'previous':
          mainCarousel && mainCarousel.scrollPrev();
          break;
        case 'next':
          mainCarousel && mainCarousel.scrollNext();
          break;
      }
    },
    [mainCarousel]
  );

  const onClick = useCallback(
    (index: number) => {
      if (onSlideClick && mainCarousel && mainCarousel.clickAllowed()) {
        onSlideClick(index);
      }
    },
    [mainCarousel, onSlideClick]
  );

  const onSelect = useCallback(() => {
    if (!mainCarousel) return;
    const newIndex = mainCarousel.selectedScrollSnap();
    setSelectedIndex(newIndex);
    if (paginationCarousel && hasPagination) {
      const slidesToScroll = paginationCarousel.slidesInView().length;
      paginationCarousel.scrollTo(Math.floor(newIndex / slidesToScroll));
    }
    if (onSlideSelect) {
      onSlideSelect(newIndex);
    }
  }, [mainCarousel, paginationCarousel, onSlideSelect, hasPagination]);

  useEffect(() => {
    if (!mainCarousel) return;
    onSelect();
    mainCarousel.on('select', onSelect);
  }, [mainCarousel, onSelect]);

  const prerenderFallbackSlide = startIndex !== 0 && !mainCarouselRef;

  return (
    <Box __css={container}>
      {prerenderFallbackSlide ? (
        <Slide
          slideIndex={startIndex}
          onClick={() => onClick(startIndex)}
          totalSlides={numberOfSlides}
          isCurrent={startIndex === selectedIndex}
          fullScreen={fullScreen}
        >
          {slides[startIndex]}
        </Slide>
      ) : (
        <Box
          ref={mainCarouselRef}
          aria-label="Carousel"
          aria-roledescription="Carousel"
          role="group"
          height={
            isMobileLandscape || !fullScreen ? 'full' : 'calc(100% - 124px)'
          }
          __css={carousel}
        >
          <Flex __css={slideContainer}>
            {slides.map((slide, index) => (
              <Slide
                key={`slide-${index}`}
                slideIndex={index}
                onClick={() => onClick(index)}
                totalSlides={numberOfSlides}
                isCurrent={index === selectedIndex}
                fullScreen={fullScreen}
              >
                {slide}
              </Slide>
            ))}
          </Flex>
          <NavigationButton
            onClick={scroll}
            direction="previous"
            fullScreen={fullScreen}
          />
          <NavigationButton
            onClick={scroll}
            direction="next"
            fullScreen={fullScreen}
          />
        </Box>
      )}

      {hasPagination && !isMobileLandscape ? (
        <ThumbnailPagination
          currentSlide={selectedIndex}
          thumbnails={slides}
          mainCarousel={mainCarousel}
          paginationCarousel={paginationCarousel}
          paginationCarouselRef={paginationCarouselRef}
        />
      ) : null}
    </Box>
  );
};

export default Carousel;

import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useMediaQuery, useMultiStyleConfig } from '@chakra-ui/react';

import { breakpoints } from 'src/themes';

import Flex from '../flex';
import Box from '../box';
import ThumbnailPagination from './ThumbnailPagination';
import Slide from './Slide';
import NumbersPagination from './NumbersPagination';
import NavigationButton from './NavigationButton';

type SharedProps = {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
  onSlideSelect?: (index: number) => void;
  withNumbersPagination?: boolean;
};

type DefaultProps = {
  fullScreen?: never;
  children: ReactNode[];
} & SharedProps;

type FullScreenSlide = {
  slide: ReactNode;
  thumbnail: ReactNode;
  onSlideEnter?: () => void;
  onSlideLeave?: () => void;
};
type FullScreenProps = {
  fullScreen: true;
  children: Array<FullScreenSlide>;
} & SharedProps;

type Props = DefaultProps | FullScreenProps;

const Carousel: FC<Props> = (props) => {
  const {
    startIndex = 0,
    onSlideClick,
    onSlideSelect,
    fullScreen,
    withNumbersPagination,
  } = props;

  const numberOfSlides = props.children.length;

  const [isSmallLandscapeViewport] = useMediaQuery(
    `(max-height: ${breakpoints.sm.px}px) and (orientation: landscape)`,
    {
      ssr: true,
      fallback: false,
    }
  );

  const hasThumbnailPagination = fullScreen && !isSmallLandscapeViewport;
  const hasNumbersPagination = withNumbersPagination && !fullScreen;

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

  const scrollPrev = useCallback(
    () => mainCarousel && mainCarousel.scrollPrev(),
    [mainCarousel]
  );
  const scrollNext = useCallback(
    () => mainCarousel && mainCarousel.scrollNext(),
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
    const previousIndex = mainCarousel.previousScrollSnap();

    setSelectedIndex(newIndex);
    if (paginationCarousel && hasThumbnailPagination) {
      const slidesToScroll = paginationCarousel.slidesInView().length;
      paginationCarousel.scrollTo(Math.floor(newIndex / slidesToScroll));
    }
    if (onSlideSelect) {
      onSlideSelect(newIndex);
    }

    if (!props.fullScreen) {
      return;
    }

    if (newIndex !== undefined) {
      const currentSlide = props.children[newIndex];
      if (currentSlide.onSlideEnter) {
        currentSlide.onSlideEnter();
      }
    }

    if (previousIndex !== undefined && previousIndex !== newIndex) {
      const previousSlide = props.children[previousIndex];
      if (previousSlide.onSlideLeave) {
        previousSlide.onSlideLeave();
      }
    }
  }, [
    mainCarousel,
    paginationCarousel,
    onSlideSelect,
    hasThumbnailPagination,
    props.children,
    props.fullScreen,
  ]);

  useEffect(() => {
    if (!mainCarousel) return;
    onSelect();
    mainCarousel.on('select', onSelect);
  }, [mainCarousel, onSelect]);

  useEffect(() => {
    const keydownListener = (e: KeyboardEvent) => {
      if (fullScreen) {
        switch (e.code) {
          case 'ArrowRight':
            scrollNext();
            break;
          case 'ArrowLeft':
            scrollPrev();
            break;
        }
      }
    };

    document.addEventListener('keydown', keydownListener);
    return () => document.removeEventListener('keydown', keydownListener);
  }, [fullScreen, scrollNext, scrollPrev]);

  const prerenderFallbackSlide = startIndex !== 0 && !mainCarouselRef;

  let carouselHeight = 'full';
  switch (true) {
    case hasNumbersPagination:
      carouselHeight = 'calc(100% - 4rem)';
      break;
    case hasThumbnailPagination:
      carouselHeight = 'calc(100% - 7.5rem)';
      break;
  }

  return (
    <Box __css={container}>
      {prerenderFallbackSlide ? (
        <Slide
          slideIndex={startIndex}
          onClick={() => onClick(startIndex)}
          totalSlides={numberOfSlides}
          isCurrent={startIndex === selectedIndex}
          fullScreen={!!fullScreen}
        >
          {props.fullScreen
            ? props.children[startIndex]?.slide
            : props.children[startIndex]}
        </Slide>
      ) : (
        <Box
          ref={mainCarouselRef}
          aria-label="Carousel"
          aria-roledescription="Carousel"
          role="group"
          height={carouselHeight}
          __css={carousel}
        >
          <Flex __css={slideContainer}>
            {props.children.map((slide, index) => (
              <Slide
                key={`slide-${index}`}
                slideIndex={index}
                onClick={() => onClick(index)}
                totalSlides={numberOfSlides}
                isCurrent={index === selectedIndex}
                fullScreen={!!fullScreen}
              >
                {slide && typeof slide === 'object' && 'slide' in slide
                  ? slide.slide
                  : slide}
              </Slide>
            ))}
          </Flex>
          <NavigationButton
            onClick={scrollPrev}
            direction="previous"
            fullScreen={!!fullScreen}
          />
          <NavigationButton
            onClick={scrollNext}
            direction="next"
            fullScreen={!!fullScreen}
          />
        </Box>
      )}

      {hasThumbnailPagination ? (
        <ThumbnailPagination
          currentSlideIndex={selectedIndex}
          thumbnails={props.children.map((slide) => slide.thumbnail)}
          mainCarousel={mainCarousel}
          paginationCarousel={paginationCarousel}
          paginationCarouselRef={paginationCarouselRef}
        />
      ) : null}

      {hasNumbersPagination ? (
        <NumbersPagination
          mainCarousel={mainCarousel}
          currentSlideIndex={selectedIndex}
          numbers={props.children.map((_, index) => index)}
        />
      ) : null}
    </Box>
  );
};

export default Carousel;

'use client';

import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useMediaQuery, useSlotRecipe } from '@chakra-ui/react';

import type { ResponsiveValue } from 'src/types/responsiveValue';
import { breakpoints } from 'src/themes';

import { Flex } from '../flex';
import { Box } from '../box';
import { ThumbnailPagination } from './ThumbnailPagination';
import { Slide } from './Slide';
import { NumbersPagination } from './NumbersPagination';
import { NavigationButton } from './NavigationButton';
import { DotsPagination } from './DotsPagination';

type SharedProps = {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
  onSlideSelect?: (index: number) => void;
  slidesPerView?: ResponsiveValue<number> | 1;
  loop?: boolean;
  slidesToScroll?: 'auto' | number;
};

type DefaultProps = {
  fullScreen?: never;
  children: ReactNode[];
  paginationType?: Exclude<PaginationType, PaginationType.Thumbnail>;
} & SharedProps;

type FullScreenSlide = {
  slide: ReactNode;
  thumbnail: ReactNode;
  onSlideEnter?: () => void;
  onSlideLeave?: () => void;
};
type FullScreenProps = {
  fullScreen: true;
  paginationType?: never;
  children: FullScreenSlide[];
} & SharedProps;

export type CarouselProps = DefaultProps | FullScreenProps;

export enum PaginationType {
  Thumbnail = 'thumbnail',
  Number = 'number',
  None = 'none',
  Dot = 'dot',
}

const isFullScreenSlide = (value: unknown): value is FullScreenSlide =>
  typeof value === 'object' && value !== null && 'slide' in (value as object);

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Carousel: FC<CarouselProps> = (props) => {
  const {
    startIndex = 0,
    onSlideClick,
    onSlideSelect,
    fullScreen,
    paginationType = PaginationType.None,
    slidesPerView = 1,
    loop = true,
    slidesToScroll = 1,
  } = props;

  const [canScrollPrevious, setCanScrollPrevious] = useState(loop);
  const [canScrollNext, setCanScrollNext] = useState(loop);
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const [isSmallLandscapeViewport] = useMediaQuery(
    [`(max-height: ${breakpoints.sm.px}px) and (orientation: landscape)`],
    {
      ssr: true,
      fallback: [false],
    },
  );
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe(fullScreen ? { variant: 'fullScreen' } : {});

  const [mainCarouselRef, mainCarousel] = useEmblaCarousel({
    loop,
    startIndex: startIndex,
    duration: 20,
    align: 'start',
    slidesToScroll,
  });
  const [paginationCarouselRef, paginationCarousel] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 'auto',
    inViewThreshold: 1,
    duration: 20,
  });

  const scrollPrev = useCallback(
    () => mainCarousel && mainCarousel.scrollPrev(true),
    [mainCarousel],
  );
  const scrollNext = useCallback(
    () => mainCarousel && mainCarousel.scrollNext(true),
    [mainCarousel],
  );
  const onClick = useCallback(
    (index: number) => {
      if (onSlideClick) {
        onSlideClick(index);
      }
    },
    [onSlideClick],
  );

  const numberOfSlides = props.children.length;
  const hasThumbnailPagination = fullScreen && !isSmallLandscapeViewport;

  const onSelect = useCallback(() => {
    if (!mainCarousel) return;
    const newIndex = mainCarousel.selectedScrollSnap();
    const previousIndex = mainCarousel.previousScrollSnap();

    setSelectedIndex(newIndex);
    setCanScrollPrevious(mainCarousel.canScrollPrev());
    setCanScrollNext(mainCarousel.canScrollNext());
    if (paginationCarousel && hasThumbnailPagination) {
      const { slideRegistry } = paginationCarousel.internalEngine();
      const snapIndexThatSlideBelongsTo = slideRegistry.findIndex((group) =>
        group.includes(newIndex),
      );

      if (typeof snapIndexThatSlideBelongsTo !== 'undefined') {
        paginationCarousel.scrollTo(snapIndexThatSlideBelongsTo);
      }
    }
    if (onSlideSelect) {
      onSlideSelect(newIndex);
    }

    if (!props.fullScreen) {
      return;
    }

    const fullScreenChildren = props.children as FullScreenSlide[];
    if (newIndex !== undefined) {
      const currentSlide = fullScreenChildren[newIndex];
      currentSlide?.onSlideEnter?.();
    }

    if (previousIndex !== undefined && previousIndex !== newIndex) {
      const previousSlide = fullScreenChildren[previousIndex];
      previousSlide?.onSlideLeave?.();
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

  const carouselHeightByPaginationTypeMap: Record<PaginationType, string> = {
    [PaginationType.None]: '100%',
    [PaginationType.Dot]: '100%',
    [PaginationType.Thumbnail]:
      'calc(100% - var(--carousel-pagination-height))',
    [PaginationType.Number]:
      'calc(100% - var(--carousel-numbers-pagination-height))',
  };
  const carouselHeightCssVarValue = hasThumbnailPagination
    ? carouselHeightByPaginationTypeMap[PaginationType.Thumbnail]
    : carouselHeightByPaginationTypeMap[paginationType];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box css={styles.container} data-group>
      {prerenderFallbackSlide ? (
        <Slide
          slideIndex={startIndex}
          onClick={() => onClick(startIndex)}
          totalSlides={numberOfSlides}
          isCurrent={startIndex === selectedIndex}
          fullScreen={!!fullScreen}
          slidesPerView={slidesPerView}
        >
          {props.fullScreen
            ? (props.children[startIndex] as FullScreenSlide)?.slide
            : (props.children[startIndex] as ReactNode)}
        </Slide>
      ) : (
        <Box
          ref={mainCarouselRef}
          aria-label="Carousel"
          aria-roledescription="Carousel"
          role="group"
          data-group
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          height={'var(--carousel-height)'}
          css={{
            ...styles.carousel,
            '--carousel-height': carouselHeightCssVarValue,
          }}
        >
          <Flex
            css={styles.slideContainer}
            marginLeft={slidesPerView === 1 ? '0' : { base: '-md', md: '-2xl' }}
          >
            {props.children.map((slide, index) => (
              <Slide
                key={`slide-${index}`}
                slideIndex={index}
                onClick={() => onClick(index)}
                totalSlides={numberOfSlides}
                isCurrent={index === selectedIndex}
                fullScreen={!!fullScreen}
                slidesPerView={slidesPerView}
              >
                {isFullScreenSlide(slide) ? slide.slide : (slide as ReactNode)}
              </Slide>
            ))}
          </Flex>
          {canScrollPrevious ? (
            <NavigationButton
              onClick={scrollPrev}
              direction="previous"
              fullScreen={!!fullScreen}
              isHovered={
                isHovered || (!!fullScreen && !isSmallLandscapeViewport)
              }
            />
          ) : null}
          {canScrollNext ? (
            <NavigationButton
              onClick={scrollNext}
              direction="next"
              fullScreen={!!fullScreen}
              isHovered={
                isHovered || (!!fullScreen && !isSmallLandscapeViewport)
              }
            />
          ) : null}
          {paginationType === PaginationType.Dot ? (
            <DotsPagination
              currentSlideIndex={selectedIndex}
              numberOfSlides={props.children.length}
            />
          ) : null}
        </Box>
      )}

      {hasThumbnailPagination ? (
        <ThumbnailPagination
          currentSlideIndex={selectedIndex}
          thumbnails={(props.children as FullScreenSlide[]).map(
            (slide) => slide.thumbnail,
          )}
          mainCarousel={mainCarousel}
          paginationCarousel={paginationCarousel}
          paginationCarouselRef={paginationCarouselRef}
        />
      ) : null}

      {paginationType === PaginationType.Number ? (
        <NumbersPagination
          mainCarousel={mainCarousel}
          currentSlideIndex={selectedIndex}
          numberOfSlides={props.children.length}
        />
      ) : null}
    </Box>
  );
};

import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useMultiStyleConfig } from '@chakra-ui/react';

import Thumbnail from './Thumbnail';
import Slide from './Slide';
import NavigationButton, { Direction } from './NavigationButton';
import Flex from '../flex';
import Box from '../box';

type Variant = 'default' | 'fullscreen' | 'fullscreen-paginated';
interface Props {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
  onSlideSelect?: (index: number) => void;
  variant: Variant;
}

const Carousel: FC<PropsWithChildren<Props>> = ({
  startIndex = 0,
  onSlideClick,
  onSlideSelect,
  children,
  variant = 'default',
}) => {
  const isFullscreen = ['fullscreen', 'fullscreen-paginated'].includes(variant);
  const styleVariant: Record<Variant, Record<string, string>> = {
    default: {},
    fullscreen: { variant: 'fullScreen' },
    'fullscreen-paginated': { variant: 'fullscreenPaginated' },
  };

  const { container, carousel, slideContainer, pagination } =
    useMultiStyleConfig('Carousel', styleVariant[variant]);

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex,
    speed: 20,
  });
  const [thumbnailViewportRef, emblaThumbnails] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(startIndex);

  const slides: ReactNode[] = Array.isArray(children) ? children : [children];
  const numberOfSlides = slides.length;

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scroll = useCallback(
    (direction: Direction) => {
      switch (direction) {
        case 'previous':
          scrollPrev();
          break;
        case 'next':
          scrollNext();
          break;
      }
    },
    [scrollNext, scrollPrev]
  );

  const onClick = useCallback(
    (index: number) => {
      if (onSlideClick && embla && embla.clickAllowed()) {
        onSlideClick(index);
      }
    },
    [embla, onSlideClick]
  );

  const onThumbnailClick = useCallback(
    (index: number) => {
      if (!embla || !emblaThumbnails || variant !== 'fullscreen-paginated')
        return;
      if (emblaThumbnails.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbnails, variant]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    const newIndex = embla.selectedScrollSnap();
    setSelectedIndex(newIndex);
    if (emblaThumbnails && variant === 'fullscreen-paginated') {
      emblaThumbnails.scrollTo(newIndex);
    }
    if (onSlideSelect) {
      onSlideSelect(newIndex);
    }
  }, [embla, emblaThumbnails, onSlideSelect, variant]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  const prerenderFallbackSlide = startIndex !== 0 && !emblaRef;

  return (
    <Box __css={container}>
      {prerenderFallbackSlide ? (
        <Slide
          slideIndex={startIndex}
          onClick={() => onClick(startIndex)}
          totalSlides={numberOfSlides}
          isCurrent={startIndex === selectedIndex}
          fullScreen={isFullscreen}
        >
          {slides[startIndex]}
        </Slide>
      ) : (
        <Box
          ref={emblaRef}
          aria-label="Carousel"
          aria-roledescription="Carousel"
          role="group"
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
                fullScreen={isFullscreen}
              >
                {slide}
              </Slide>
            ))}
          </Flex>
          <NavigationButton
            onClick={scroll}
            direction="previous"
            fullScreen={isFullscreen}
          />
          <NavigationButton
            onClick={scroll}
            direction="next"
            fullScreen={isFullscreen}
          />
        </Box>
      )}
      {variant === 'fullscreen-paginated' ? (
        <Box ref={thumbnailViewportRef} __css={pagination}>
          <Flex>
            {slides.map((slide, index) => (
              <Thumbnail
                key={`slide-${index}`}
                onClick={() => onThumbnailClick(index)}
                isCurrent={index === selectedIndex}
              >
                {slide}
              </Thumbnail>
            ))}
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default Carousel;

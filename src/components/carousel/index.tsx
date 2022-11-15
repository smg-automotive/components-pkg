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
  const { container, slideContainer } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {}
  );

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex,
    speed: 20,
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

  const onSelect = useCallback(() => {
    if (!embla) return;
    const newIndex = embla.selectedScrollSnap();
    setSelectedIndex(newIndex);
    if (onSlideSelect) {
      onSlideSelect(newIndex);
    }
  }, [embla, setSelectedIndex, onSlideSelect]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

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

  const prerenderFallbackSlide = startIndex !== 0 && !emblaRef;

  return prerenderFallbackSlide ? (
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
      ref={emblaRef}
      aria-label="Carousel"
      aria-roledescription="Carousel"
      role="group"
      __css={container}
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
  );
};

export default Carousel;

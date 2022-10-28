import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Slide from './Slide';
import NavigationButton, { Direction } from './NavigationButton';
import Flex from '../flex';
import Box from '../box';

interface Props {
  startIndex?: number;
  onSlideClick?: (index: number) => void;
  onSlideSelect?: (index: number) => void;
}

const Carousel: FC<PropsWithChildren<Props>> = ({
  startIndex = 0,
  onSlideClick,
  onSlideSelect,
  children,
}) => {
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

  const prerenderFallbackSlide = startIndex !== 0 && !emblaRef;

  return prerenderFallbackSlide ? (
    <Slide
      slideIndex={startIndex}
      onClick={() => onClick(startIndex)}
      totalSlides={numberOfSlides}
      isCurrent={startIndex === selectedIndex}
    >
      {slides[startIndex]}
    </Slide>
  ) : (
    <Box
      ref={emblaRef}
      overflow="hidden"
      position="relative"
      aria-label="Carousel"
      aria-roledescription="Carousel"
      role="group"
    >
      <Flex>
        {slides.map((slide, index) => (
          <Slide
            key={`slide-${index}`}
            slideIndex={index}
            onClick={() => onClick(index)}
            totalSlides={numberOfSlides}
            isCurrent={index === selectedIndex}
          >
            {slide}
          </Slide>
        ))}
      </Flex>
      <NavigationButton onClick={scroll} direction="previous" />
      <NavigationButton onClick={scroll} direction="next" />
    </Box>
  );
};

export default Carousel;
